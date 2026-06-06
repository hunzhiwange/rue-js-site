import{$ as e,J as t,Kt as n,Lt as r,Q as i,S as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,et as d,gt as f,l as p,mt as m,ot as h,pt as g,s as _,st as ee,t as v,tt as y}from"./vapor-runtime-DHPuOjqh.js";import{a as b}from"./vapor-helpers-vapor-CJFAWine.js";import{i as x}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as te}from"./Code-Ds9lKLk6.js";import{t as S}from"./SidebarPlaygroundExample-KML-rOvA.js";var C=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,w=t=>p(n=>{let r=e(`section`,n);u(r,`card border border-base-300 bg-base-100 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-4`);let a=e(`div`,i);s(i,a),u(a,`space-y-1`);let d=e(`h2`,a);s(a,d),u(d,`text-lg font-semibold leading-tight`);let f=l(`rue:slot:anchor`);s(d,f),c(()=>{let e=t.title;o(()=>_(e,d,f))});let p=e(`p`,a);s(a,p),u(p,`text-sm text-base-content/70 leading-6`);let m=l(`rue:slot:anchor`);s(p,m),c(()=>{let e=t.note;o(()=>_(e,p,m))});let h=e(`div`,i);s(i,h),u(h,`grid gap-2 text-sm text-base-content/85`);let g=l(`rue:children:anchor`);return s(h,g),c(()=>{let e=t.children;o(()=>_(e,h,g))}),r}),T=t=>{let{toneClassName:r}=b(`useSetup:0:0`,()=>n(()=>({toneClassName:b(`computed:1:0`,()=>f(()=>t.tone===`success`?`border-success/30 bg-success/10 text-success`:t.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return p(n=>{let i=e(`div`,n);u(i,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let a=e(`span`,i);s(i,a),u(a,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let d=l(`rue:slot:anchor`);s(a,d),c(()=>{let e=t.label;o(()=>_(e,a,d))});let f=e(`span`,i);s(i,f),c(()=>{u(f,String(`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${r.get()}`))});let p=y(f);return s(f,p),c(()=>{m(p,String(t.value))}),i})},ne=e=>{let{normalized:t,summary:r}=b(`useSetup:0:0:dup1`,()=>n(()=>{let t=b(`computed:1:1`,()=>f(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:b(`computed:1:2`,()=>f(()=>`${n.get()} x ${e.count}`))}}));return a(`div`,{className:`grid gap-2`},x(T,{label:`normalized`,value:t.get(),tone:`success`}),x(T,{label:`summary`,value:r.get(),tone:`success`}),x(T,{label:`mode`,value:`render 期直接读取解构 props`}))},re=t=>{let{setupState:i}=b(`useSetup:0:0:dup2`,()=>n(()=>({setupState:b(`useSetup:1:5`,()=>n(()=>{let e={defaultValue:t.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:b(`ref:1:3`,()=>r(e.defaultValue)),pageRef:b(`ref:1:4`,()=>r(t.count))}}))})));return p(t=>{let n=e(`div`,t);u(n,`grid gap-2`);let r=l(`rue:component:anchor`);s(n,r),c(()=>{let e=v(T,{label:`searchConfig.defaultValue`,value:i.searchConfig.defaultValue,tone:`warning`});o(()=>_(e,n,r))});let a=l(`rue:component:anchor`);s(n,a),c(()=>{let e=v(T,{label:`searchValueRef.value`,value:i.searchValueRef.value,tone:`warning`});o(()=>_(e,n,a))});let d=l(`rue:component:anchor`);s(n,d),c(()=>{let e=v(T,{label:`pageRef.value`,value:i.pageRef.value,tone:`warning`});o(()=>_(e,n,d))});let f=l(`rue:component:anchor`);return s(n,f),_(v(T,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),n,f),n})},ie=t=>{let{setupState:r}=b(`useSetup:0:0:dup3`,()=>n(()=>({setupState:b(`useSetup:1:8`,()=>n(()=>({normalized:b(`computed:1:6`,()=>f(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:7`,()=>f(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return p(t=>{let n=e(`div`,t);u(n,`grid gap-2`);let i=l(`rue:component:anchor`);s(n,i),c(()=>{let e=v(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});o(()=>_(e,n,i))});let a=l(`rue:component:anchor`);s(n,a),c(()=>{let e=v(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});o(()=>_(e,n,a))});let d=l(`rue:component:anchor`);return s(n,d),_(v(T,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),n,d),n})},ae=t=>{let{setupState:r}=b(`useSetup:0:0:dup4`,()=>n(()=>({setupState:b(`useSetup:1:11`,()=>n(()=>({normalized:b(`computed:1:9`,()=>f(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:10`,()=>f(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return p(t=>{let n=e(`div`,t);u(n,`grid gap-2`);let i=l(`rue:component:anchor`);s(n,i),c(()=>{let e=v(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});o(()=>_(e,n,i))});let a=l(`rue:component:anchor`);s(n,a),c(()=>{let e=v(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});o(()=>_(e,n,a))});let d=l(`rue:component:anchor`);return s(n,d),_(v(T,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),n,d),n})},oe=t=>{let{setupState:r}=b(`useSetup:0:0:dup5`,()=>n(()=>({setupState:b(`useSetup:1:16`,()=>n(()=>({normalized:b(`computed:1:12`,()=>f(()=>((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`)),total:b(`computed:1:13`,()=>f(()=>((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]))),summary:b(`computed:1:14`,()=>f(()=>`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`} x ${((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1])}`)),tuple:b(`computed:1:15`,()=>f(()=>`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`))})))})));return p(t=>{let n=e(`div`,t);u(n,`grid gap-2`);let i=l(`rue:component:anchor`);s(n,i),c(()=>{let e=v(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});o(()=>_(e,n,i))});let a=l(`rue:component:anchor`);s(n,a),c(()=>{let e=v(T,{label:`total.get()`,value:r.total.get(),tone:`success`});o(()=>_(e,n,a))});let d=l(`rue:component:anchor`);s(n,d),c(()=>{let e=v(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});o(()=>_(e,n,d))});let f=l(`rue:component:anchor`);s(n,f),c(()=>{let e=v(T,{label:`tuple.get()`,value:r.tuple.get(),tone:`success`});o(()=>_(e,n,f))});let p=l(`rue:component:anchor`);return s(n,p),_(v(T,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),n,p),n})},se=t=>{let{setupState:r}=b(`useSetup:0:0:dup6`,()=>n(()=>({setupState:b(`useSetup:1:17`,()=>n(()=>{let e=((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`,n=((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]);return{normalized:e,total:n,summary:`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${e} x ${n}`,tuple:`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`}}))})));return p(t=>{let n=e(`div`,t);u(n,`grid gap-2`);let i=l(`rue:component:anchor`);s(n,i),c(()=>{let e=v(T,{label:`normalized`,value:r.normalized,tone:`warning`});o(()=>_(e,n,i))});let a=l(`rue:component:anchor`);s(n,a),c(()=>{let e=v(T,{label:`total`,value:r.total,tone:`warning`});o(()=>_(e,n,a))});let d=l(`rue:component:anchor`);s(n,d),c(()=>{let e=v(T,{label:`summary`,value:r.summary,tone:`warning`});o(()=>_(e,n,d))});let f=l(`rue:component:anchor`);s(n,f),c(()=>{let e=v(T,{label:`tuple`,value:r.tuple,tone:`warning`});o(()=>_(e,n,f))});let p=l(`rue:component:anchor`);return s(n,p),_(v(T,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),n,p),n})},E=()=>{let{activeTab:a,query:f,count:m,nestedQuery:y,nestedLabel:x,nestedFirst:E,nestedSecond:D,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=b(`useSetup:0:0:dup7`,()=>n(()=>{let e=b(`ref:1:18`,()=>r(`preview`)),t=b(`ref:1:19`,()=>r(` transfer `)),n=b(`ref:1:20`,()=>r(2)),i=b(`ref:1:21`,()=>r(` nested transfer `)),a=b(`ref:1:22`,()=>r(`deep-live`)),o=b(`ref:1:23`,()=>r(3)),s=b(`ref:1:24`,()=>r(5)),c=b(`ref:1:25`,()=>r(!0)),l=b(`ref:1:26`,()=>r(!0)),u=b(`ref:1:27`,()=>r(!0)),d=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:i,nestedLabel:a,nestedFirst:o,nestedSecond:s,passNestedOptions:c,passNestedMeta:l,passNestedCounts:u,presets:d,nextPreset:()=>{let e=d.findIndex(e=>e===t.value);t.value=d[e<0?0:(e+1)%d.length]}}}));return p(n=>{let r=i(),b=l(`rue:component:anchor`);return s(r,b),_(v(S,{children:p(()=>{let n=i(),r=e(`div`,n);s(n,r),u(r,`space-y-4`);let b=e(`div`,r);s(r,b),u(b,`space-y-3`);let S=e(`h1`,b);s(b,S),u(S,`text-4xl font-semibold tracking-tight`),s(S,d(`Props 与 useSetup 边界`));let j=e(`p`,b);s(b,j),u(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),s(j,d(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=e(`p`,b);s(b,M),u(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),s(M,d(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=e(`div`,r);s(r,N),h(N,`role`,`tablist`),u(N,`tabs tabs-box`);let P=e(`button`,N);s(N,P),h(P,`role`,`tab`),c(()=>{u(P,String(`tab ${a.value===`preview`?`tab-active`:``}`))}),t(P,`click`,()=>{a.value=`preview`}),s(P,d(`效果`));let F=e(`button`,N);s(N,F),h(F,`role`,`tab`),c(()=>{u(F,String(`tab ${a.value===`code`?`tab-active`:``}`))}),t(F,`click`,()=>{a.value=`code`}),s(F,d(`代码`));let I=e(`div`,r);s(r,I),u(I,`mt-4 grid gap-6 items-start`);let L=l(`rue:slot:anchor`);s(I,L),c(()=>{let n=a.value===`preview`?p(()=>{let n=i();s(n,d(` `));let r=e(`section`,n);s(n,r),u(r,`card border border-base-300 bg-base-100 shadow-sm`);let a=e(`div`,r);s(r,a),u(a,`card-body gap-5`);let p=e(`div`,a);s(a,p),u(p,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=e(`label`,p);s(p,b),u(b,`form-control grid gap-2`);let te=e(`span`,b);s(b,te),u(te,`label-text font-medium`),s(te,d(`父组件 props.query`));let S=e(`input`,b);s(b,S),u(S,`input input-bordered`),c(()=>{g(S,f.value)}),t(S,`input`,e=>{f.value=e.target.value});let C=e(`button`,p);s(p,C),u(C,`btn btn-outline`),t(C,`click`,ce),s(C,d(`切换预设 query`));let j=e(`div`,a);s(a,j),u(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=e(`span`,j);s(j,M),u(M,`text-sm font-medium`),s(M,d(`父组件 props.count`));let N=e(`div`,j);s(j,N),u(N,`join`);let P=e(`button`,N);s(N,P),u(P,`btn join-item btn-outline`),t(P,`click`,()=>{--m.value}),s(P,d(`-1`));let F=e(`button`,N);s(N,F),u(F,`btn join-item btn-outline`),t(F,`click`,()=>{m.value+=1}),s(F,d(`+1`));let I=e(`input`,j);s(j,I),u(I,`range range-primary`),h(I,`type`,`range`),h(I,`min`,`0`),h(I,`max`,`12`),h(I,`step`,`1`),c(()=>{g(I,String(m.value))}),t(I,`input`,e=>{m.value=Number(e.target.value)});let L=e(`div`,a);s(a,L),u(L,`grid gap-3 md:grid-cols-3`);let le=l(`rue:component:anchor`);s(L,le),c(()=>{let e=v(T,{label:`当前 query`,value:f.value});o(()=>_(e,L,le))});let ue=l(`rue:component:anchor`);s(L,ue),c(()=>{let e=v(T,{label:`trim().toUpperCase()`,value:f.value.trim().toUpperCase()||`(empty)`});o(()=>_(e,L,ue))});let de=l(`rue:component:anchor`);s(L,de),c(()=>{let e=v(T,{label:`当前 count`,value:m.value});o(()=>_(e,L,de))}),s(n,d(` `));let R=e(`div`,n);s(n,R),u(R,`grid gap-4 xl:grid-cols-2`);let fe=l(`rue:component:anchor`);s(R,fe),_(v(w,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:v(ne,{query:f.value,count:m.value})}),R,fe);let pe=l(`rue:component:anchor`);s(R,pe),_(v(w,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:v(re,{query:f.value,count:m.value})}),R,pe);let me=l(`rue:component:anchor`);s(R,me),_(v(w,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:v(ie,{query:f.value,count:m.value})}),R,me);let he=l(`rue:component:anchor`);s(R,he),_(v(w,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:v(ae,{query:f.value,count:m.value})}),R,he),s(n,d(` `));let ge=e(`div`,n);s(n,ge),u(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),s(ge,d(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),s(n,d(` `));let _e=e(`section`,n);s(n,_e),u(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=e(`div`,_e);s(_e,z),u(z,`card-body gap-5`);let B=e(`div`,z);s(z,B),u(B,`space-y-1`);let ve=e(`h2`,B);s(B,ve),u(ve,`text-lg font-semibold leading-tight`),s(ve,d(`Nested 解构边界`));let ye=e(`p`,B);s(B,ye),u(ye,`text-sm text-base-content/70 leading-6`),s(ye,d(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=e(`div`,z);s(z,V),u(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=e(`label`,V);s(V,H),u(H,`form-control grid gap-2`);let be=e(`span`,H);s(H,be),u(be,`label-text font-medium`),s(be,d(`nested options.query`));let xe=e(`input`,H);s(H,xe),u(xe,`input input-bordered`),c(()=>{g(xe,y.value)}),t(xe,`input`,e=>{y.value=e.target.value});let U=e(`label`,V);s(V,U),u(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=e(`input`,U);s(U,W),u(W,`checkbox checkbox-sm`),h(W,`type`,`checkbox`),c(()=>{ee(W,!!O.value)}),t(W,`input`,e=>{O.value=!!e.target.checked});let Se=e(`span`,U);s(U,Se),u(Se,`label-text`),s(Se,d(`传入 options`));let G=e(`div`,z);s(z,G),u(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=e(`label`,G);s(G,K),u(K,`form-control grid gap-2`);let Ce=e(`span`,K);s(K,Ce),u(Ce,`label-text font-medium`),s(Ce,d(`nested options.meta.label`));let we=e(`input`,K);s(K,we),u(we,`input input-bordered`),c(()=>{g(we,x.value)}),t(we,`input`,e=>{x.value=e.target.value});let q=e(`label`,G);s(G,q),u(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=e(`input`,q);s(q,Te),u(Te,`checkbox checkbox-sm`),h(Te,`type`,`checkbox`),c(()=>{ee(Te,!!k.value)}),t(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=e(`span`,q);s(q,Ee),u(Ee,`label-text`),s(Ee,d(`传入 meta`));let J=e(`div`,z);s(z,J),u(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=e(`span`,J);s(J,De),u(De,`text-sm font-medium`),s(De,d(`nested counts`));let Y=e(`div`,J);s(J,Y),u(Y,`join`);let Oe=e(`button`,Y);s(Y,Oe),u(Oe,`btn join-item btn-outline`),t(Oe,`click`,()=>{--E.value}),s(Oe,d(`first -1`));let ke=e(`button`,Y);s(Y,ke),u(ke,`btn join-item btn-outline`),t(ke,`click`,()=>{E.value+=1}),s(ke,d(`first +1`));let X=e(`input`,J);s(J,X),u(X,`range range-primary`),h(X,`type`,`range`),h(X,`min`,`0`),h(X,`max`,`12`),h(X,`step`,`1`),c(()=>{g(X,String(D.value))}),t(X,`input`,e=>{D.value=Number(e.target.value)});let Z=e(`label`,J);s(J,Z),u(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=e(`input`,Z);s(Z,Ae),u(Ae,`checkbox checkbox-sm`),h(Ae,`type`,`checkbox`),c(()=>{ee(Ae,!!A.value)}),t(Ae,`input`,e=>{A.value=!!e.target.checked});let je=e(`span`,Z);s(Z,je),u(je,`label-text`),s(je,d(`传入 counts`));let Q=e(`div`,z);s(z,Q),u(Q,`grid gap-3 md:grid-cols-4`);let Me=l(`rue:component:anchor`);s(Q,Me),c(()=>{let e=v(T,{label:`options.query`,value:O.value?y.value:`undefined`});o(()=>_(e,Q,Me))});let Ne=l(`rue:component:anchor`);s(Q,Ne),c(()=>{let e=v(T,{label:`options.meta.label`,value:O.value&&k.value?x.value:`undefined`});o(()=>_(e,Q,Ne))});let Pe=l(`rue:component:anchor`);s(Q,Pe),c(()=>{let e=v(T,{label:`counts[0]`,value:A.value?E.value:`undefined`});o(()=>_(e,Q,Pe))});let Fe=l(`rue:component:anchor`);s(Q,Fe),c(()=>{let e=v(T,{label:`counts[1]`,value:A.value?D.value:`undefined`});o(()=>_(e,Q,Fe))}),s(n,d(` `));let $=e(`div`,n);s(n,$),u($,`grid gap-4 xl:grid-cols-2`);let Ie=l(`rue:component:anchor`);s($,Ie),_(v(w,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:v(oe,{options:O.value?{query:y.value,meta:k.value?{label:x.value}:void 0}:void 0,counts:A.value?[E.value,D.value]:void 0})}),$,Ie);let Le=l(`rue:component:anchor`);s($,Le),_(v(w,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:v(se,{options:O.value?{query:y.value,meta:k.value?{label:x.value}:void 0}:void 0,counts:A.value?[E.value,D.value]:void 0})}),$,Le),s(n,d(` `));let Re=e(`div`,n);return s(n,Re),u(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),s(Re,d(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),s(n,d(` `)),n}):``;o(()=>_(n,I,L))}),s(I,d(` `));let le=l(`rue:slot:anchor`);return s(I,le),c(()=>{let t=a.value===`code`?p(()=>{let t=i(),n=e(`div`,t);s(t,n),u(n,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let a=l(`rue:component:anchor`);return s(r,a),c(()=>{let e=v(te,{className:`h-full`,lang:`tsx`,code:C});o(()=>_(e,r,a))}),t}):``;o(()=>_(t,I,le))}),n})}),r,b),r})};export{E as default};