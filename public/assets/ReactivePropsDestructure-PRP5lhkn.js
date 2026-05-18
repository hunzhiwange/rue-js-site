import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,Z as u,d,dt as f,ht as p,l as m,rt as h,st as g,t as _,vt as v,z as y}from"./vapor-runtime-BuwLbCGk.js";import{a as b}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as x}from"./Code-DQxnq0in.js";import{t as S}from"./SidebarPlaygroundExample-BwOo72z2.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=t=>d(n=>{let a=i(`div`,n);r(a,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=i(`span`,a);o(a,c),r(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let l=e(`rue:slot:anchor`);o(c,l),v(()=>{let e=t.label;f(()=>m(e,c,l))});let u=i(`span`,a);o(a,u),r(u,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let d=y(u);return o(u,d),v(()=>{s(d,String(t.value))}),a}),T=t=>{let{summary:n,latest:a,shadow:s}=b(`useSetup:0:0`,()=>p(()=>{let e=b(`computed:1:0`,()=>h(()=>`${t.label===void 0?`fallback-label`:t.label}:${(t.query===void 0?`fallback-query`:t.query).trim().toUpperCase()} x ${t.count}`)),n=b(`ref:1:1`,()=>g(``)),r=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>v(()=>{n.value=`${t.query===void 0?`fallback-query`:t.query}|${t.count}|${t.label===void 0?`fallback-label`:t.label}|${r(t.query===void 0?`fallback-query`:t.query)}`})),{summary:e,latest:n,shadow:r}}));return d(l=>{let u=i(`section`,l);r(u,`card border border-success/25 bg-base-100 shadow-sm`);let d=i(`div`,u);o(u,d),r(d,`card-body gap-4`);let p=i(`div`,d);o(d,p),r(p,`space-y-1`);let h=i(`div`,p);o(p,h),r(h,`badge badge-success badge-outline`),o(h,c(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let g=i(`h2`,p);o(p,g),r(g,`text-lg font-semibold`),o(g,c(`编译器改写后的解构 props`));let y=i(`p`,p);o(p,y),r(y,`text-sm leading-6 text-base-content/72`),o(y,c(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=i(`div`,d);o(d,b),r(b,`grid gap-3 md:grid-cols-2`);let x=e(`rue:component:anchor`);o(b,x),v(()=>{let e=_(w,{label:`summary.get()`,value:n.get()});f(()=>m(e,b,x))});let S=e(`rue:component:anchor`);o(b,S),v(()=>{let e=_(w,{label:`watchEffect latest`,value:a.value});f(()=>m(e,b,S))});let C=e(`rue:component:anchor`);o(b,C),v(()=>{let e=_(w,{label:`shadow(query)`,value:s(t.query===void 0?`fallback-query`:t.query)});f(()=>m(e,b,C))});let T=e(`rue:component:anchor`);return o(b,T),v(()=>{let e=_(w,{label:`render text`,value:`${t.query===void 0?`fallback-query`:t.query} / ${t.count} / ${t.label===void 0?`fallback-label`:t.label}`});f(()=>m(e,b,T))}),u})},E=()=>{let{activeTab:s,query:h,count:y,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>p(()=>({activeTab:b(`ref:1:3`,()=>g(`preview`)),query:b(`ref:1:4`,()=>g(` transfer `)),count:b(`ref:1:5`,()=>g(2)),label:b(`ref:1:6`,()=>g(`runtime-label`)),passQuery:b(`ref:1:7`,()=>g(!0)),passLabel:b(`ref:1:8`,()=>g(!0))})));return d(p=>{let g=n(),b=e(`rue:component:anchor`);return o(g,b),m(_(S,{children:d(()=>{let p=n(),g=i(`div`,p);o(p,g),r(g,`space-y-4`);let b=i(`div`,g);o(g,b),r(b,`space-y-3`);let S=i(`h1`,b);o(b,S),r(S,`text-4xl font-semibold tracking-tight`),o(S,c(`Reactive Props Destructure`));let k=i(`p`,b);o(b,k),r(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(k,c(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=i(`div`,g);o(g,A),l(A,`role`,`tablist`),r(A,`tabs tabs-box`);let j=i(`button`,A);o(A,j),l(j,`role`,`tab`),v(()=>{r(j,String(`tab ${s.value===`preview`?`tab-active`:``}`))}),a(j,`click`,()=>{s.value=`preview`}),o(j,c(`效果`));let M=i(`button`,A);o(A,M),l(M,`role`,`tab`),v(()=>{r(M,String(`tab ${s.value===`code`?`tab-active`:``}`))}),a(M,`click`,()=>{s.value=`code`}),o(M,c(`代码`));let N=i(`div`,g);o(g,N),r(N,`mt-4 grid gap-6 items-start`);let P=e(`rue:slot:anchor`);o(N,P),v(()=>{let p=s.value===`preview`?d(()=>{let s=n();o(s,c(` `));let d=i(`section`,s);o(s,d),r(d,`card border border-base-300 bg-base-100 shadow-sm`);let p=i(`div`,d);o(d,p),r(p,`card-body gap-5`);let g=i(`div`,p);o(p,g),r(g,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=i(`label`,g);o(g,b),r(b,`form-control grid gap-2`);let x=i(`span`,b);o(b,x),r(x,`label-text font-medium`),o(x,c(`父组件 query`));let S=i(`input`,b);o(b,S),r(S,`input input-bordered`),v(()=>{u(S,h.value)}),a(S,`input`,e=>{h.value=e.target.value});let C=i(`label`,g);o(g,C),r(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=i(`input`,C);o(C,k),r(k,`checkbox checkbox-sm`),l(k,`type`,`checkbox`),v(()=>{t(k,!!D.value)}),a(k,`input`,e=>{D.value=!!e.target.checked});let A=i(`span`,C);o(C,A),r(A,`label-text`),o(A,c(`传入 query`));let j=i(`div`,p);o(p,j),r(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=i(`label`,j);o(j,M),r(M,`form-control grid gap-2`);let N=i(`span`,M);o(M,N),r(N,`label-text font-medium`),o(N,c(`父组件 label`));let P=i(`input`,M);o(M,P),r(P,`input input-bordered`),v(()=>{u(P,E.value)}),a(P,`input`,e=>{E.value=e.target.value});let F=i(`label`,j);o(j,F),r(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=i(`input`,F);o(F,I),r(I,`checkbox checkbox-sm`),l(I,`type`,`checkbox`),v(()=>{t(I,!!O.value)}),a(I,`input`,e=>{O.value=!!e.target.checked});let L=i(`span`,F);o(F,L),r(L,`label-text`),o(L,c(`传入 label`));let R=i(`div`,p);o(p,R),r(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=i(`span`,R);o(R,z),r(z,`text-sm font-medium`),o(z,c(`父组件 count`));let B=i(`input`,R);o(R,B),r(B,`range range-primary`),l(B,`type`,`range`),l(B,`min`,`0`),l(B,`max`,`12`),l(B,`step`,`1`),v(()=>{u(B,String(y.value))}),a(B,`input`,e=>{y.value=Number(e.target.value)});let V=i(`div`,p);o(p,V),r(V,`grid gap-3 md:grid-cols-3`);let H=e(`rue:component:anchor`);o(V,H),v(()=>{let e=_(w,{label:`raw query`,value:D.value?h.value:void 0});f(()=>m(e,V,H))});let U=e(`rue:component:anchor`);o(V,U),v(()=>{let e=_(w,{label:`raw label`,value:O.value?E.value:void 0});f(()=>m(e,V,U))});let W=e(`rue:component:anchor`);o(V,W),v(()=>{let e=_(w,{label:`raw count`,value:y.value});f(()=>m(e,V,W))}),o(s,c(` `));let G=e(`rue:component:anchor`);o(s,G),v(()=>{let e=_(T,{query:D.value?h.value:void 0,count:y.value,label:O.value?E.value:void 0});f(()=>m(e,s,G))}),o(s,c(` `));let K=i(`div`,s);return o(s,K),r(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(K,c(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),o(s,c(` `)),s}):``;f(()=>m(p,N,P))}),o(N,c(` `));let F=e(`rue:slot:anchor`);return o(N,F),v(()=>{let t=s.value===`code`?d(()=>{let t=n(),a=i(`div`,t);o(t,a),r(a,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let s=i(`div`,a);o(a,s),r(s,`card-body p-0`);let c=e(`rue:component:anchor`);return o(s,c),v(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});f(()=>m(e,s,c))}),t}):``;f(()=>m(t,N,F))}),p})}),g,b),g})};export{E as default};