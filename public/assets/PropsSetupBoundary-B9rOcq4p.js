import{Bt as e,H as t,J as n,Jt as r,U as i,Ut as a,V as o,Vt as s,Wt as c,Y as l,_t as u,en as d,fn as f,gn as p,gt as m,hn as h,in as g,mn as _,pn as v,sn as y,st as b,tt as x,u as S,vt as C,yn as w,yt as T,zt as E}from"./rue-runtime-Cv6BZekS.js";import{t as ee}from"./Code-BzFVdc3U.js";import{r as D}from"./SidebarPlaygroundExample-rFyhXfC_.js";var te=`import { computed, ref, type FC, useSetup } from '@rue-js/rue'
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

  return (
    <div className="grid gap-2">
      <FieldRow label="normalized" value={normalized} tone="success" />
      <FieldRow label="summary" value={summary} tone="success" />
      <FieldRow label="mode" value="render 期直接读取解构 props" />
    </div>
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
                不是绝对不能进 setup，关键是要保留 编译 props 对象，并在 computed 或 watch 里读取。
                4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed
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
                块说明编译器只保证“读取时”还能回到 编译 props；如果你在 useSetup
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
`,O=w(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),k=w(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),ne=w(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div>`),re=w(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Props 与 useSetup 边界</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。</p><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),A=(t,n,r)=>{let a=C(m(t,`children`)),o=C(m(t,`note`)),s=C(m(t,`title`));return i(c(t=>{let n=h(`section`,t);n.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let r=h(`div`,n);f(n,r),r.setAttribute(`class`,`card-body gap-4`);let i=h(`div`,r);f(r,i),i.setAttribute(`class`,`space-y-1`);let c=h(`h2`,i);f(i,c),c.setAttribute(`class`,`text-lg font-semibold leading-tight`);let l=v(`rue:compiled-slot`);f(c,l),e({parent:c,before:l},()=>E(s.get()),()=>({}));let u=h(`p`,i);f(i,u),u.setAttribute(`class`,`text-sm text-base-content/70 leading-6`);let d=v(`rue:compiled-slot`);f(u,d),e({parent:u,before:d},()=>E(o.get()),()=>({}));let p=h(`div`,r);f(r,p),p.setAttribute(`class`,`grid gap-2 text-sm text-base-content/85`);let m=v(`rue:compiled-slot`);return f(p,m),e({parent:p,before:m},()=>a.get(),()=>({})),[n,n]}),e=>d(()=>{a.set(e.children),o.set(e.note),s.set(e.title)}),()=>u(t))},j=(t,n,r)=>{let a=C(m(t,`label`)),o=C(m(t,`tone`)),s=C(m(t,`value`)),l=x(()=>o.get()===`success`?`border-success/30 bg-success/10 text-success`:o.get()===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`);return l.get(),i(c(t=>{let n=h(`div`,t);n.setAttribute(`class`,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let r=h(`span`,n);f(n,r),r.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let i=v(`rue:compiled-slot`);f(r,i),e({parent:r,before:i},()=>E(a.get()),()=>({}));let o=h(`span`,n);f(n,o);let c;g(()=>{let e=`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${l.get()}`,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,o.setAttribute(`class`,t))});let u=v(`rue:compiled-slot`);return f(o,u),e({parent:o,before:u},()=>E(s.get()),()=>({})),[n,n]}),e=>d(()=>{a.set(e.label),o.set(e.tone),s.set(e.value)}),()=>u(t))},ie=(t,n,r)=>{let a=C(m(t,`count`)),l=C(m(t,`query`)),f=x(()=>l.get().trim().toUpperCase()||`(empty)`);f.get();let p=f,h=x(()=>`${p.get()} x ${a.get()}`);return h.get(),i(c(t=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],c=a.parentNode,l=n.childNodes[2],u=l.parentNode,d=(e,t,n)=>{let r=()=>o(j,()=>({label:`normalized`,value:f.get(),tone:`success`}));return e==null?r():s(e,n,r)},p=r.nextSibling;i.removeChild(r),e({parent:i,before:p},()=>d,()=>({}));let m=(e,t,n)=>{let r=()=>o(j,()=>({label:`summary`,value:h.get(),tone:`success`}));return e==null?r():s(e,n,r)},g=a.nextSibling;c.removeChild(a),e({parent:c,before:g},()=>m,()=>({}));let _=(e,t,n)=>{let r=()=>o(j,()=>({label:`mode`,value:`render 期直接读取解构 props`}));return e==null?r():s(e,n,r)},v=l.nextSibling;return u.removeChild(l),e({parent:u,before:v},()=>_,()=>({})),[n,n]}),e=>d(()=>{a.set(e.count),l.set(e.query)}),()=>u(t))},ae=(t,r,a)=>{let f=C(m(t,`count`)),p=C(m(t,`query`)),h=n(`ManualOnceSetupChild:hook:0`,()=>{let e={defaultValue:p.get().trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:b(e.defaultValue),pageRef:b(f.get())}});return l(()=>i(c(t=>{let n=k().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],c=a.parentNode,l=n.childNodes[2],u=l.parentNode,d=n.childNodes[3],f=d.parentNode,p=(e,t,n)=>{let r=()=>o(j,()=>({label:`searchConfig.defaultValue`,value:h.searchConfig.defaultValue,tone:`warning`}));return e==null?r():s(e,n,r)},m=r.nextSibling;i.removeChild(r),e({parent:i,before:m},()=>p,()=>({}));let g=(e,t,n)=>{let r=()=>o(j,()=>({label:`searchValueRef.value`,value:h.searchValueRef.value,tone:`warning`}));return e==null?r():s(e,n,r)},_=a.nextSibling;c.removeChild(a),e({parent:c,before:_},()=>g,()=>({}));let v=(e,t,n)=>{let r=()=>o(j,()=>({label:`pageRef.value`,value:h.pageRef.value,tone:`warning`}));return e==null?r():s(e,n,r)},y=l.nextSibling;u.removeChild(l),e({parent:u,before:y},()=>v,()=>({}));let b=(e,t,n)=>{let r=()=>o(j,()=>({label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}));return e==null?r():s(e,n,r)},x=d.nextSibling;return f.removeChild(d),e({parent:f,before:x},()=>b,()=>({})),[n,n]}),e=>d(()=>{f.set(e.count),p.set(e.query)}),()=>u(t)))},oe=(t,r,a)=>{let f=C(m(t,`count`)),p=C(m(t,`query`)),h=n(`ReactivePropsObjectSetupChild:hook:0`,()=>({normalized:x(()=>p.get().trim().toUpperCase()||`(empty)`),summary:x(()=>`${p.get().trim().toUpperCase()||`(empty)`} x ${f.get()}`)}));return l(()=>i(c(t=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],c=a.parentNode,l=n.childNodes[2],u=l.parentNode,d=(e,t,n)=>{let r=()=>o(j,()=>({label:`normalized.get()`,value:h.normalized.get(),tone:`success`}));return e==null?r():s(e,n,r)},f=r.nextSibling;i.removeChild(r),e({parent:i,before:f},()=>d,()=>({}));let p=(e,t,n)=>{let r=()=>o(j,()=>({label:`summary.get()`,value:h.summary.get(),tone:`success`}));return e==null?r():s(e,n,r)},m=a.nextSibling;c.removeChild(a),e({parent:c,before:m},()=>p,()=>({}));let g=(e,t,n)=>{let r=()=>o(j,()=>({label:`mode`,value:`useSetup 内改用 props 对象 + computed`}));return e==null?r():s(e,n,r)},_=l.nextSibling;return u.removeChild(l),e({parent:u,before:_},()=>g,()=>({})),[n,n]}),e=>d(()=>{f.set(e.count),p.set(e.query)}),()=>u(t)))},se=(t,r,a)=>{let f=C(m(t,`count`)),p=C(m(t,`query`)),h=n(`ReactiveDestructuredComputedSetupChild:hook:0`,()=>({normalized:x(()=>p.get().trim().toUpperCase()||`(empty)`),summary:x(()=>`${p.get().trim().toUpperCase()||`(empty)`} x ${f.get()}`)}));return l(()=>i(c(t=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],c=a.parentNode,l=n.childNodes[2],u=l.parentNode,d=(e,t,n)=>{let r=()=>o(j,()=>({label:`normalized.get()`,value:h.normalized.get(),tone:`success`}));return e==null?r():s(e,n,r)},f=r.nextSibling;i.removeChild(r),e({parent:i,before:f},()=>d,()=>({}));let p=(e,t,n)=>{let r=()=>o(j,()=>({label:`summary.get()`,value:h.summary.get(),tone:`success`}));return e==null?r():s(e,n,r)},m=a.nextSibling;c.removeChild(a),e({parent:c,before:m},()=>p,()=>({}));let g=(e,t,n)=>{let r=()=>o(j,()=>({label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}));return e==null?r():s(e,n,r)},_=l.nextSibling;return u.removeChild(l),e({parent:u,before:_},()=>g,()=>({})),[n,n]}),e=>d(()=>{f.set(e.count),p.set(e.query)}),()=>u(t)))},ce=(t,i,a)=>{let{setupState:l,__rue_phase2_setupState:u}=r(`useSetup:0:0`,()=>{let e=x(()=>n(`plan:4448:hook:0`,()=>({normalized:x(()=>((m(t,`options`)===void 0?{}:m(t,`options`)).query===void 0?` nested-default `:(m(t,`options`)===void 0?{}:m(t,`options`)).query).trim().toUpperCase()||`(empty)`),total:x(()=>((m(t,`counts`)===void 0?[]:m(t,`counts`))[0]===void 0?1:(m(t,`counts`)===void 0?[]:m(t,`counts`))[0])+((m(t,`counts`)===void 0?[]:m(t,`counts`))[1]===void 0?2:(m(t,`counts`)===void 0?[]:m(t,`counts`))[1])),summary:x(()=>`${((m(t,`options`)===void 0?{}:m(t,`options`)).meta===void 0?{}:(m(t,`options`)===void 0?{}:m(t,`options`)).meta).label===void 0?`fallback-label`:((m(t,`options`)===void 0?{}:m(t,`options`)).meta===void 0?{}:(m(t,`options`)===void 0?{}:m(t,`options`)).meta).label}:${((m(t,`options`)===void 0?{}:m(t,`options`)).query===void 0?` nested-default `:(m(t,`options`)===void 0?{}:m(t,`options`)).query).trim().toUpperCase()||`(empty)`} x ${((m(t,`counts`)===void 0?[]:m(t,`counts`))[0]===void 0?1:(m(t,`counts`)===void 0?[]:m(t,`counts`))[0])+((m(t,`counts`)===void 0?[]:m(t,`counts`))[1]===void 0?2:(m(t,`counts`)===void 0?[]:m(t,`counts`))[1])}`),tuple:x(()=>`${(m(t,`counts`)===void 0?[]:m(t,`counts`))[0]===void 0?1:(m(t,`counts`)===void 0?[]:m(t,`counts`))[0]}-${(m(t,`counts`)===void 0?[]:m(t,`counts`))[1]===void 0?2:(m(t,`counts`)===void 0?[]:m(t,`counts`))[1]}`)})));return e.get(),{setupState:e,__rue_phase2_setupState:e}});return c(t=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],c=a.parentNode,u=n.childNodes[2],d=u.parentNode,f=n.childNodes[3],p=f.parentNode,m=n.childNodes[4],h=m.parentNode,g=(e,t,n)=>{let r=()=>o(j,()=>({label:`normalized.get()`,value:l.get().normalized.get(),tone:`success`}));return e==null?r():s(e,n,r)},_=r.nextSibling;i.removeChild(r),e({parent:i,before:_},()=>g,()=>({}));let v=(e,t,n)=>{let r=()=>o(j,()=>({label:`total.get()`,value:l.get().total.get(),tone:`success`}));return e==null?r():s(e,n,r)},y=a.nextSibling;c.removeChild(a),e({parent:c,before:y},()=>v,()=>({}));let b=(e,t,n)=>{let r=()=>o(j,()=>({label:`summary.get()`,value:l.get().summary.get(),tone:`success`}));return e==null?r():s(e,n,r)},x=u.nextSibling;d.removeChild(u),e({parent:d,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>o(j,()=>({label:`tuple.get()`,value:l.get().tuple.get(),tone:`success`}));return e==null?r():s(e,n,r)},C=f.nextSibling;p.removeChild(f),e({parent:p,before:C},()=>S,()=>({}));let w=(e,t,n)=>{let r=()=>o(j,()=>({label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}));return e==null?r():s(e,n,r)},T=m.nextSibling;return h.removeChild(m),e({parent:h,before:T},()=>w,()=>({})),[n,n]})},le=(t,i,a)=>{let{setupState:l,__rue_phase2_setupState:u}=r(`useSetup:0:0`,()=>{let e=x(()=>n(`plan:5499:hook:0`,()=>{let e=((m(t,`options`)===void 0?{}:m(t,`options`)).query===void 0?` nested-default `:(m(t,`options`)===void 0?{}:m(t,`options`)).query).trim().toUpperCase()||`(empty)`,n=((m(t,`counts`)===void 0?[]:m(t,`counts`))[0]===void 0?1:(m(t,`counts`)===void 0?[]:m(t,`counts`))[0])+((m(t,`counts`)===void 0?[]:m(t,`counts`))[1]===void 0?2:(m(t,`counts`)===void 0?[]:m(t,`counts`))[1]);return{normalized:e,total:n,summary:`${((m(t,`options`)===void 0?{}:m(t,`options`)).meta===void 0?{}:(m(t,`options`)===void 0?{}:m(t,`options`)).meta).label===void 0?`fallback-label`:((m(t,`options`)===void 0?{}:m(t,`options`)).meta===void 0?{}:(m(t,`options`)===void 0?{}:m(t,`options`)).meta).label}:${e} x ${n}`,tuple:`${(m(t,`counts`)===void 0?[]:m(t,`counts`))[0]===void 0?1:(m(t,`counts`)===void 0?[]:m(t,`counts`))[0]}-${(m(t,`counts`)===void 0?[]:m(t,`counts`))[1]===void 0?2:(m(t,`counts`)===void 0?[]:m(t,`counts`))[1]}`}}));return e.get(),{setupState:e,__rue_phase2_setupState:e}});return c(t=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],c=a.parentNode,u=n.childNodes[2],d=u.parentNode,f=n.childNodes[3],p=f.parentNode,m=n.childNodes[4],h=m.parentNode,g=(e,t,n)=>{let r=()=>o(j,()=>({label:`normalized`,value:l.get().normalized,tone:`warning`}));return e==null?r():s(e,n,r)},_=r.nextSibling;i.removeChild(r),e({parent:i,before:_},()=>g,()=>({}));let v=(e,t,n)=>{let r=()=>o(j,()=>({label:`total`,value:l.get().total,tone:`warning`}));return e==null?r():s(e,n,r)},y=a.nextSibling;c.removeChild(a),e({parent:c,before:y},()=>v,()=>({}));let b=(e,t,n)=>{let r=()=>o(j,()=>({label:`summary`,value:l.get().summary,tone:`warning`}));return e==null?r():s(e,n,r)},x=u.nextSibling;d.removeChild(u),e({parent:d,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>o(j,()=>({label:`tuple`,value:l.get().tuple,tone:`warning`}));return e==null?r():s(e,n,r)},C=f.nextSibling;p.removeChild(f),e({parent:p,before:C},()=>S,()=>({}));let w=(e,t,n)=>{let r=()=>o(j,()=>({label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}));return e==null?r():s(e,n,r)},T=m.nextSibling;return h.removeChild(m),e({parent:h,before:T},()=>w,()=>({})),[n,n]})},M=(e,n,r)=>{let i=b(`preview`),u=b(` transfer `),d=b(2),m=b(` nested transfer `),v=b(`deep-live`),x=b(3),C=b(5),w=b(!0),E=b(!0),O=b(!0),k=[` transfer `,` rue `,` vapor `,` setup `],ne=()=>{let e=k.findIndex(e=>e===u.value),t=e<0?0:(e+1)%k.length;u.value=k[t]};return l(()=>o(D,()=>({children:(e,n,r)=>{let o=()=>c(e=>{let n=_(),r=re().content.cloneNode(!0),o=r.firstChild,l=o.childNodes[1].childNodes[0],b=o.childNodes[1].childNodes[1],D=o.childNodes[2].childNodes[0],k=D.parentNode,M=o.childNodes[2].childNodes[1],ue=M.parentNode;n.appendChild(r),l.setAttribute(`role`,`tab`);let N;g(()=>{let e=`tab ${i.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,l.setAttribute(`class`,t))}),y(S(e,l,`click`,()=>()=>{i.value=`preview`})),b.setAttribute(`role`,`tab`);let P;g(()=>{let e=`tab ${i.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(P,t)||(P=t,b.setAttribute(`class`,t))}),y(S(e,b,`click`,()=>()=>{i.value=`code`})),a(k,D,()=>{let e=i.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let n=_(),r=h(`section`,n);f(n,r),r.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let i=h(`div`,r);f(r,i),i.setAttribute(`class`,`card-body gap-5`);let a=h(`div`,i);f(i,a),a.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let o=h(`label`,a);f(a,o),o.setAttribute(`class`,`form-control grid gap-2`);let l=h(`span`,o);f(o,l),l.setAttribute(`class`,`label-text font-medium`),f(l,p(`父组件 props.query`));let b=h(`input`,o);f(o,b),b.setAttribute(`class`,`input input-bordered`);let T;g(()=>{let e=u.value,t=e==null?``:String(e);Object.is(T,t)||(T=t,b.value=t)});let ee=e=>{let t=e=>{u.value=e.target.value};typeof t==`function`&&t(e)};b.addEventListener(`input`,ee),y(()=>b.removeEventListener(`input`,ee));let D=h(`button`,a);f(a,D),D.setAttribute(`class`,`btn btn-outline`);let te=e=>{let t=ne;typeof t==`function`&&t(e)};D.addEventListener(`click`,te),y(()=>D.removeEventListener(`click`,te)),f(D,p(`切换预设 query`));let k=h(`div`,i);f(i,k),k.setAttribute(`class`,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let re=h(`span`,k);f(k,re),re.setAttribute(`class`,`text-sm font-medium`),f(re,p(`父组件 props.count`));let M=h(`div`,k);f(k,M),M.setAttribute(`class`,`join`);let ue=h(`button`,M);f(M,ue),ue.setAttribute(`class`,`btn join-item btn-outline`),y(S(e,ue,`click`,()=>()=>{--d.value})),f(ue,p(`-1`));let N=h(`button`,M);f(M,N),N.setAttribute(`class`,`btn join-item btn-outline`),y(S(e,N,`click`,()=>()=>{d.value+=1})),f(N,p(`+1`));let P=h(`input`,k);f(k,P),P.setAttribute(`class`,`range range-primary`),P.setAttribute(`type`,`range`),P.setAttribute(`min`,`0`),P.setAttribute(`max`,`12`),P.setAttribute(`step`,`1`);let de;g(()=>{let e=String(d.value),t=e==null?``:String(e);Object.is(de,t)||(de=t,P.value=t)});let fe=e=>{let t=e=>{d.value=Number(e.target.value)};typeof t==`function`&&t(e)};P.addEventListener(`input`,fe),y(()=>P.removeEventListener(`input`,fe));let F=h(`div`,i);f(i,F),F.setAttribute(`class`,`grid gap-3 md:grid-cols-3`),t(F,j,()=>({label:`当前 query`,value:u.value})),t(F,j,()=>({label:`trim().toUpperCase()`,value:u.value.trim().toUpperCase()||`(empty)`})),t(F,j,()=>({label:`当前 count`,value:d.value}));let I=h(`div`,n);f(n,I),I.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`),t(I,A,()=>({title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,ie,()=>({query:u.value,count:d.value}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),t(I,A,()=>({title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,ae,()=>({query:u.value,count:d.value}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),t(I,A,()=>({title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,oe,()=>({query:u.value,count:d.value}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),t(I,A,()=>({title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,se,()=>({query:u.value,count:d.value}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));let pe=h(`div`,n);f(n,pe),pe.setAttribute(`class`,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),f(pe,p(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 编译 props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`));let me=h(`section`,n);f(n,me),me.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let L=h(`div`,me);f(me,L),L.setAttribute(`class`,`card-body gap-5`);let R=h(`div`,L);f(L,R),R.setAttribute(`class`,`space-y-1`);let he=h(`h2`,R);f(R,he),he.setAttribute(`class`,`text-lg font-semibold leading-tight`),f(he,p(`Nested 解构边界`));let ge=h(`p`,R);f(R,ge),ge.setAttribute(`class`,`text-sm text-base-content/70 leading-6`),f(ge,p(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let z=h(`div`,L);f(L,z),z.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let B=h(`label`,z);f(z,B),B.setAttribute(`class`,`form-control grid gap-2`);let _e=h(`span`,B);f(B,_e),_e.setAttribute(`class`,`label-text font-medium`),f(_e,p(`nested options.query`));let V=h(`input`,B);f(B,V),V.setAttribute(`class`,`input input-bordered`);let ve;g(()=>{let e=m.value,t=e==null?``:String(e);Object.is(ve,t)||(ve=t,V.value=t)});let ye=e=>{let t=e=>{m.value=e.target.value};typeof t==`function`&&t(e)};V.addEventListener(`input`,ye),y(()=>V.removeEventListener(`input`,ye));let H=h(`label`,z);f(z,H),H.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let U=h(`input`,H);f(H,U),U.setAttribute(`class`,`checkbox checkbox-sm`),U.setAttribute(`type`,`checkbox`);let be;g(()=>{let e=!!w.value;Object.is(be,e)||(be=e,U.checked=e)});let xe=e=>{let t=e=>{w.value=!!e.target.checked};typeof t==`function`&&t(e)};U.addEventListener(`input`,xe),y(()=>U.removeEventListener(`input`,xe));let Se=h(`span`,H);f(H,Se),Se.setAttribute(`class`,`label-text`),f(Se,p(`传入 options`));let W=h(`div`,L);f(L,W),W.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let G=h(`label`,W);f(W,G),G.setAttribute(`class`,`form-control grid gap-2`);let Ce=h(`span`,G);f(G,Ce),Ce.setAttribute(`class`,`label-text font-medium`),f(Ce,p(`nested options.meta.label`));let we=h(`input`,G);f(G,we),we.setAttribute(`class`,`input input-bordered`);let Te;g(()=>{let e=v.value,t=e==null?``:String(e);Object.is(Te,t)||(Te=t,we.value=t)});let Ee=e=>{let t=e=>{v.value=e.target.value};typeof t==`function`&&t(e)};we.addEventListener(`input`,Ee),y(()=>we.removeEventListener(`input`,Ee));let K=h(`label`,W);f(W,K),K.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let q=h(`input`,K);f(K,q),q.setAttribute(`class`,`checkbox checkbox-sm`),q.setAttribute(`type`,`checkbox`);let De;g(()=>{let e=!!E.value;Object.is(De,e)||(De=e,q.checked=e)});let Oe=e=>{let t=e=>{E.value=!!e.target.checked};typeof t==`function`&&t(e)};q.addEventListener(`input`,Oe),y(()=>q.removeEventListener(`input`,Oe));let ke=h(`span`,K);f(K,ke),ke.setAttribute(`class`,`label-text`),f(ke,p(`传入 meta`));let J=h(`div`,L);f(L,J),J.setAttribute(`class`,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let Ae=h(`span`,J);f(J,Ae),Ae.setAttribute(`class`,`text-sm font-medium`),f(Ae,p(`nested counts`));let Y=h(`div`,J);f(J,Y),Y.setAttribute(`class`,`join`);let je=h(`button`,Y);f(Y,je),je.setAttribute(`class`,`btn join-item btn-outline`),y(S(e,je,`click`,()=>()=>{--x.value})),f(je,p(`first -1`));let Me=h(`button`,Y);f(Y,Me),Me.setAttribute(`class`,`btn join-item btn-outline`),y(S(e,Me,`click`,()=>()=>{x.value+=1})),f(Me,p(`first +1`));let X=h(`input`,J);f(J,X),X.setAttribute(`class`,`range range-primary`),X.setAttribute(`type`,`range`),X.setAttribute(`min`,`0`),X.setAttribute(`max`,`12`),X.setAttribute(`step`,`1`);let Ne;g(()=>{let e=String(C.value),t=e==null?``:String(e);Object.is(Ne,t)||(Ne=t,X.value=t)});let Pe=e=>{let t=e=>{C.value=Number(e.target.value)};typeof t==`function`&&t(e)};X.addEventListener(`input`,Pe),y(()=>X.removeEventListener(`input`,Pe));let Z=h(`label`,J);f(J,Z),Z.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Q=h(`input`,Z);f(Z,Q),Q.setAttribute(`class`,`checkbox checkbox-sm`),Q.setAttribute(`type`,`checkbox`);let Fe;g(()=>{let e=!!O.value;Object.is(Fe,e)||(Fe=e,Q.checked=e)});let Ie=e=>{let t=e=>{O.value=!!e.target.checked};typeof t==`function`&&t(e)};Q.addEventListener(`input`,Ie),y(()=>Q.removeEventListener(`input`,Ie));let Le=h(`span`,Z);f(Z,Le),Le.setAttribute(`class`,`label-text`),f(Le,p(`传入 counts`));let $=h(`div`,L);f(L,$),$.setAttribute(`class`,`grid gap-3 md:grid-cols-4`),t($,j,()=>({label:`options.query`,value:w.value?m.value:`undefined`})),t($,j,()=>({label:`options.meta.label`,value:w.value&&E.value?v.value:`undefined`})),t($,j,()=>({label:`counts[0]`,value:O.value?x.value:`undefined`})),t($,j,()=>({label:`counts[1]`,value:O.value?C.value:`undefined`}));let Re=h(`div`,n);f(n,Re),Re.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`),t(Re,A,()=>({title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,ce,()=>({options:w.value?{query:m.value,meta:E.value?{label:v.value}:void 0}:void 0,counts:O.value?[x.value,C.value]:void 0}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),t(Re,A,()=>({title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,le,()=>({options:w.value?{query:m.value,meta:E.value?{label:v.value}:void 0}:void 0,counts:O.value?[x.value,C.value]:void 0}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));let ze=h(`div`,n);f(n,ze),ze.setAttribute(`class`,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),f(ze,p(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 编译 props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`));let Be=p(``),Ve=p(``);return n.insertBefore(Be,n.firstChild),n.appendChild(Ve),[n.firstChild,n.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=_();return[t.firstChild,t.lastChild]})}}),a(ue,M,()=>{let e=i.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let n=h(`div`,e);n.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let r=h(`div`,n);return f(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,ee,()=>({className:`h-full`,lang:`tsx`,code:te})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=_();return[t.firstChild,t.lastChild]})}});let de=p(``),fe=p(``);return n.insertBefore(de,n.firstChild),n.appendChild(fe),[n.firstChild,n.lastChild]});return e==null?o():s(e,r,o)}})))};export{M as default};