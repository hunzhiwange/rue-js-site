import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,dt as u,et as d,kt as f,l as p,ot as m,q as h,st as g,t as _,tt as v,xt as y}from"./vapor-runtime-BAZOdMd8.js";import{a as b}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as x}from"./Code-DY4Ua5uc.js";import{t as S}from"./SidebarPlaygroundExample-B8LFNSBu.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
import reactivePropsDestructureSource from './ReactivePropsDestructure.tsx?raw'
import SidebarPlayground from '../site/SidebarPlaygroundExample'
import Code from '../site/components/Code'

type DemoProps = {
  query?: string
  count: number
  label?: string
}

const InfoRow: FC<{ label: string; value: any }> = props => {
  return (
    <div className="grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5">
      <span className="text-xs uppercase tracking-[0.18em] text-base-content/45">
        {props.label}
      </span>
      <span className="rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm">
        {String(props.value)}
      </span>
    </div>
  )
}

const CompiledDestructureChild: FC<DemoProps> = ({
  query = 'fallback-query',
  count: total,
  label: text = 'fallback-label',
}) => {
  const summary = computed(() => \`\${text}:\${query.trim().toUpperCase()} x \${total}\`)
  const latest = ref('')
  const shadow = (query: string) => query.toLowerCase()

  watchEffect(() => {
    latest.value = \`\${query}|\${total}|\${text}|\${shadow(query)}\`
  })

  return (
    <section className="card border border-success/25 bg-base-100 shadow-sm">
      <div className="card-body gap-4">
        <div className="space-y-1">
          <div className="badge badge-success badge-outline">
            /* RUE_REACTIVE_PROPS_DESTRUCTURED */
          </div>
          <h2 className="text-lg font-semibold">编译器改写后的解构 props</h2>
          <p className="text-sm leading-6 text-base-content/72">
            这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props
            对象访问，所以仍然保持响应式。
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <InfoRow label="summary.get()" value={summary.get()} />
          <InfoRow label="watchEffect latest" value={latest.value} />
          <InfoRow label="shadow(query)" value={shadow(query)} />
          <InfoRow label="render text" value={\`\${query} / \${total} / \${text}\`} />
        </div>
      </div>
    </section>
  )
}

const ReactivePropsDestructure: FC = () => {
  const activeTab = ref<'preview' | 'code'>('preview')
  const query = ref(' transfer ')
  const count = ref(2)
  const label = ref('runtime-label')
  const passQuery = ref(true)
  const passLabel = ref(true)

  return (
    <SidebarPlayground>
      <div className="space-y-4">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Reactive Props Destructure</h1>
          <p className="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">
            这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏
            props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。
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
                      <span className="label-text font-medium">父组件 query</span>
                      <input
                        className="input input-bordered"
                        value={query.value}
                        onInput={(event: Event) => {
                          query.value = (event.target as HTMLInputElement).value
                        }}
                      />
                    </label>

                    <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2">
                      <input
                        className="checkbox checkbox-sm"
                        type="checkbox"
                        checked={passQuery.value}
                        onInput={(event: Event) => {
                          passQuery.value = !!(event.target as HTMLInputElement).checked
                        }}
                      />
                      <span className="label-text">传入 query</span>
                    </label>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                    <label className="form-control grid gap-2">
                      <span className="label-text font-medium">父组件 label</span>
                      <input
                        className="input input-bordered"
                        value={label.value}
                        onInput={(event: Event) => {
                          label.value = (event.target as HTMLInputElement).value
                        }}
                      />
                    </label>

                    <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2">
                      <input
                        className="checkbox checkbox-sm"
                        type="checkbox"
                        checked={passLabel.value}
                        onInput={(event: Event) => {
                          passLabel.value = !!(event.target as HTMLInputElement).checked
                        }}
                      />
                      <span className="label-text">传入 label</span>
                    </label>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
                    <span className="text-sm font-medium">父组件 count</span>
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
                    <InfoRow label="raw query" value={passQuery.value ? query.value : undefined} />
                    <InfoRow label="raw label" value={passLabel.value ? label.value : undefined} />
                    <InfoRow label="raw count" value={count.value} />
                  </div>
                </div>
              </section>

              <CompiledDestructureChild
                query={passQuery.value ? query.value : undefined}
                count={count.value}
                label={passLabel.value ? label.value : undefined}
              />

              <div className="rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80">
                观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动
                count、query、label 时，summary 和 watchEffect latest 会同步更新。 3.
                子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于
                watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() =&gt; query,
                ...)。
              </div>
            </>
          )}

          {activeTab.value === 'code' && (
            <div className="card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]">
              <div className="card-body p-0">
                <Code className="h-full" lang="tsx" code={reactivePropsDestructureSource} />
              </div>
            </div>
          )}
        </div>
      </div>
    </SidebarPlayground>
  )
}

export default ReactivePropsDestructure
`,w=e=>l(t=>{let n=a(`div`,t);v(n,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let o=a(`span`,n);r(n,o),v(o,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let c=s(`rue:slot:anchor`);r(o,c),f(()=>{let t=e.label;y(()=>p(t,o,c))});let l=a(`span`,n);r(n,l),v(l,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let u=i(l);return r(l,u),f(()=>{g(u,String(e.value))}),n}),T=e=>{let{summary:n,latest:i,shadow:o}=b(`useSetup:0:0`,()=>t(()=>{let t=b(`computed:1:0`,()=>u(()=>`${e.label===void 0?`fallback-label`:e.label}:${(e.query===void 0?`fallback-query`:e.query).trim().toUpperCase()} x ${e.count}`)),n=b(`ref:1:1`,()=>c(``)),r=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>f(()=>{n.value=`${e.query===void 0?`fallback-query`:e.query}|${e.count}|${e.label===void 0?`fallback-label`:e.label}|${r(e.query===void 0?`fallback-query`:e.query)}`})),{summary:t,latest:n,shadow:r}}));return l(t=>{let c=a(`section`,t);v(c,`card border border-success/25 bg-base-100 shadow-sm`);let l=a(`div`,c);r(c,l),v(l,`card-body gap-4`);let u=a(`div`,l);r(l,u),v(u,`space-y-1`);let d=a(`div`,u);r(u,d),v(d,`badge badge-success badge-outline`),r(d,h(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let m=a(`h2`,u);r(u,m),v(m,`text-lg font-semibold`),r(m,h(`编译器改写后的解构 props`));let g=a(`p`,u);r(u,g),v(g,`text-sm leading-6 text-base-content/72`),r(g,h(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=a(`div`,l);r(l,b),v(b,`grid gap-3 md:grid-cols-2`);let x=s(`rue:component:anchor`);r(b,x),f(()=>{let e=_(w,{label:`summary.get()`,value:n.get()});y(()=>p(e,b,x))});let S=s(`rue:component:anchor`);r(b,S),f(()=>{let e=_(w,{label:`watchEffect latest`,value:i.value});y(()=>p(e,b,S))});let C=s(`rue:component:anchor`);r(b,C),f(()=>{let t=_(w,{label:`shadow(query)`,value:o(e.query===void 0?`fallback-query`:e.query)});y(()=>p(t,b,C))});let T=s(`rue:component:anchor`);return r(b,T),f(()=>{let t=_(w,{label:`render text`,value:`${e.query===void 0?`fallback-query`:e.query} / ${e.count} / ${e.label===void 0?`fallback-label`:e.label}`});y(()=>p(t,b,T))}),c})},E=()=>{let{activeTab:i,query:u,count:g,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>t(()=>({activeTab:b(`ref:1:3`,()=>c(`preview`)),query:b(`ref:1:4`,()=>c(` transfer `)),count:b(`ref:1:5`,()=>c(2)),label:b(`ref:1:6`,()=>c(`runtime-label`)),passQuery:b(`ref:1:7`,()=>c(!0)),passLabel:b(`ref:1:8`,()=>c(!0))})));return l(t=>{let c=n(),b=s(`rue:component:anchor`);return r(c,b),p(_(S,{children:l(()=>{let t=n(),c=a(`div`,t);r(t,c),v(c,`space-y-4`);let b=a(`div`,c);r(c,b),v(b,`space-y-3`);let S=a(`h1`,b);r(b,S),v(S,`text-4xl font-semibold tracking-tight`),r(S,h(`Reactive Props Destructure`));let k=a(`p`,b);r(b,k),v(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),r(k,h(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=a(`div`,c);r(c,A),e(A,`role`,`tablist`),v(A,`tabs tabs-box`);let j=a(`button`,A);r(A,j),e(j,`role`,`tab`),f(()=>{v(j,String(`tab ${i.value===`preview`?`tab-active`:``}`))}),o(j,`click`,()=>{i.value=`preview`}),r(j,h(`效果`));let M=a(`button`,A);r(A,M),e(M,`role`,`tab`),f(()=>{v(M,String(`tab ${i.value===`code`?`tab-active`:``}`))}),o(M,`click`,()=>{i.value=`code`}),r(M,h(`代码`));let N=a(`div`,c);r(c,N),v(N,`mt-4 grid gap-6 items-start`);let P=s(`rue:slot:anchor`);r(N,P),f(()=>{let t=i.value===`preview`?l(()=>{let t=n();r(t,h(` `));let i=a(`section`,t);r(t,i),v(i,`card border border-base-300 bg-base-100 shadow-sm`);let c=a(`div`,i);r(i,c),v(c,`card-body gap-5`);let l=a(`div`,c);r(c,l),v(l,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=a(`label`,l);r(l,b),v(b,`form-control grid gap-2`);let x=a(`span`,b);r(b,x),v(x,`label-text font-medium`),r(x,h(`父组件 query`));let S=a(`input`,b);r(b,S),v(S,`input input-bordered`),f(()=>{m(S,u.value)}),o(S,`input`,e=>{u.value=e.target.value});let C=a(`label`,l);r(l,C),v(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=a(`input`,C);r(C,k),v(k,`checkbox checkbox-sm`),e(k,`type`,`checkbox`),f(()=>{d(k,!!D.value)}),o(k,`input`,e=>{D.value=!!e.target.checked});let A=a(`span`,C);r(C,A),v(A,`label-text`),r(A,h(`传入 query`));let j=a(`div`,c);r(c,j),v(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=a(`label`,j);r(j,M),v(M,`form-control grid gap-2`);let N=a(`span`,M);r(M,N),v(N,`label-text font-medium`),r(N,h(`父组件 label`));let P=a(`input`,M);r(M,P),v(P,`input input-bordered`),f(()=>{m(P,E.value)}),o(P,`input`,e=>{E.value=e.target.value});let F=a(`label`,j);r(j,F),v(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=a(`input`,F);r(F,I),v(I,`checkbox checkbox-sm`),e(I,`type`,`checkbox`),f(()=>{d(I,!!O.value)}),o(I,`input`,e=>{O.value=!!e.target.checked});let L=a(`span`,F);r(F,L),v(L,`label-text`),r(L,h(`传入 label`));let R=a(`div`,c);r(c,R),v(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=a(`span`,R);r(R,z),v(z,`text-sm font-medium`),r(z,h(`父组件 count`));let B=a(`input`,R);r(R,B),v(B,`range range-primary`),e(B,`type`,`range`),e(B,`min`,`0`),e(B,`max`,`12`),e(B,`step`,`1`),f(()=>{m(B,String(g.value))}),o(B,`input`,e=>{g.value=Number(e.target.value)});let V=a(`div`,c);r(c,V),v(V,`grid gap-3 md:grid-cols-3`);let H=s(`rue:component:anchor`);r(V,H),f(()=>{let e=_(w,{label:`raw query`,value:D.value?u.value:void 0});y(()=>p(e,V,H))});let U=s(`rue:component:anchor`);r(V,U),f(()=>{let e=_(w,{label:`raw label`,value:O.value?E.value:void 0});y(()=>p(e,V,U))});let W=s(`rue:component:anchor`);r(V,W),f(()=>{let e=_(w,{label:`raw count`,value:g.value});y(()=>p(e,V,W))}),r(t,h(` `));let G=s(`rue:component:anchor`);r(t,G),f(()=>{let e=_(T,{query:D.value?u.value:void 0,count:g.value,label:O.value?E.value:void 0});y(()=>p(e,t,G))}),r(t,h(` `));let K=a(`div`,t);return r(t,K),v(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),r(K,h(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),r(t,h(` `)),t}):``;y(()=>p(t,N,P))}),r(N,h(` `));let F=s(`rue:slot:anchor`);return r(N,F),f(()=>{let e=i.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),v(t,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let i=a(`div`,t);r(t,i),v(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),f(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});y(()=>p(e,i,o))}),e}):``;y(()=>p(e,N,F))}),t})}),c,b),c})};export{E as default};