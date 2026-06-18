import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,gt as d,l as f,ot as p,pt as m,q as h,qt as g,s as _,st as v,t as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as x}from"./Code-CZqShVUj.js";import{r as S}from"./SidebarPlaygroundExample-5H7RL-T7.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=e=>f(r=>{let s=i(`div`,r);v(s,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=i(`span`,s);n(s,c),v(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let u=a(`rue:slot:anchor`);n(c,u),o(()=>{let n=e.label;t(()=>_(n,c,u))});let d=i(`span`,s);n(s,d),v(d,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let f=l(d);return n(d,f),o(()=>{m(f,String(e.value))}),s}),T=s=>{let{summary:c,latest:l,shadow:u}=b(`useSetup:0:0`,()=>g(()=>{let e=b(`computed:1:0`,()=>d(()=>`${s.label===void 0?`fallback-label`:s.label}:${(s.query===void 0?`fallback-query`:s.query).trim().toUpperCase()} x ${s.count}`)),t=b(`ref:1:1`,()=>r(``)),n=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>o(()=>{t.value=`${s.query===void 0?`fallback-query`:s.query}|${s.count}|${s.label===void 0?`fallback-label`:s.label}|${n(s.query===void 0?`fallback-query`:s.query)}`})),{summary:e,latest:t,shadow:n}}));return f(r=>{let d=i(`section`,r);v(d,`card border border-success/25 bg-base-100 shadow-sm`);let f=i(`div`,d);n(d,f),v(f,`card-body gap-4`);let p=i(`div`,f);n(f,p),v(p,`space-y-1`);let m=i(`div`,p);n(p,m),v(m,`badge badge-success badge-outline`),n(m,e(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let h=i(`h2`,p);n(p,h),v(h,`text-lg font-semibold`),n(h,e(`编译器改写后的解构 props`));let g=i(`p`,p);n(p,g),v(g,`text-sm leading-6 text-base-content/72`),n(g,e(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=i(`div`,f);n(f,b),v(b,`grid gap-3 md:grid-cols-2`);let x=a(`rue:component:anchor`);n(b,x),o(()=>{let e=y(w,{label:`summary.get()`,value:c.get()});t(()=>_(e,b,x))});let S=a(`rue:component:anchor`);n(b,S),o(()=>{let e=y(w,{label:`watchEffect latest`,value:l.value});t(()=>_(e,b,S))});let C=a(`rue:component:anchor`);n(b,C),o(()=>{let e=y(w,{label:`shadow(query)`,value:u(s.query===void 0?`fallback-query`:s.query)});t(()=>_(e,b,C))});let T=a(`rue:component:anchor`);return n(b,T),o(()=>{let e=y(w,{label:`render text`,value:`${s.query===void 0?`fallback-query`:s.query} / ${s.count} / ${s.label===void 0?`fallback-label`:s.label}`});t(()=>_(e,b,T))}),d})},E=()=>{let{activeTab:l,query:d,count:m,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>g(()=>({activeTab:b(`ref:1:3`,()=>r(`preview`)),query:b(`ref:1:4`,()=>r(` transfer `)),count:b(`ref:1:5`,()=>r(2)),label:b(`ref:1:6`,()=>r(`runtime-label`)),passQuery:b(`ref:1:7`,()=>r(!0)),passLabel:b(`ref:1:8`,()=>r(!0))})));return f(r=>{let g=s(),b=a(`rue:component:anchor`);return n(g,b),_(y(S,{children:f(()=>{let r=s(),g=i(`div`,r);n(r,g),v(g,`space-y-4`);let b=i(`div`,g);n(g,b),v(b,`space-y-3`);let S=i(`h1`,b);n(b,S),v(S,`text-4xl font-semibold tracking-tight`),n(S,e(`Reactive Props Destructure`));let k=i(`p`,b);n(b,k),v(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),n(k,e(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=i(`div`,g);n(g,A),c(A,`role`,`tablist`),v(A,`tabs tabs-box`);let j=i(`button`,A);n(A,j),c(j,`role`,`tab`),o(()=>{v(j,`tab ${l.value===`preview`?`tab-active`:``}`)}),h(j,`click`,()=>{l.value=`preview`}),n(j,e(`效果`));let M=i(`button`,A);n(A,M),c(M,`role`,`tab`),o(()=>{v(M,`tab ${l.value===`code`?`tab-active`:``}`)}),h(M,`click`,()=>{l.value=`code`}),n(M,e(`代码`));let N=i(`div`,g);n(g,N),v(N,`mt-4 grid gap-6 items-start`);let P=a(`rue:slot:anchor`);n(N,P),o(()=>{let r=l.value===`preview`?f(()=>{let r=s();n(r,e(` `));let l=i(`section`,r);n(r,l),v(l,`card border border-base-300 bg-base-100 shadow-sm`);let f=i(`div`,l);n(l,f),v(f,`card-body gap-5`);let g=i(`div`,f);n(f,g),v(g,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=i(`label`,g);n(g,b),v(b,`form-control grid gap-2`);let x=i(`span`,b);n(b,x),v(x,`label-text font-medium`),n(x,e(`父组件 query`));let S=i(`input`,b);n(b,S),v(S,`input input-bordered`),o(()=>{u(S,d.value)}),h(S,`input`,e=>{d.value=e.target.value});let C=i(`label`,g);n(g,C),v(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=i(`input`,C);n(C,k),v(k,`checkbox checkbox-sm`),c(k,`type`,`checkbox`),o(()=>{p(k,!!D.value)}),h(k,`input`,e=>{D.value=!!e.target.checked});let A=i(`span`,C);n(C,A),v(A,`label-text`),n(A,e(`传入 query`));let j=i(`div`,f);n(f,j),v(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=i(`label`,j);n(j,M),v(M,`form-control grid gap-2`);let N=i(`span`,M);n(M,N),v(N,`label-text font-medium`),n(N,e(`父组件 label`));let P=i(`input`,M);n(M,P),v(P,`input input-bordered`),o(()=>{u(P,E.value)}),h(P,`input`,e=>{E.value=e.target.value});let F=i(`label`,j);n(j,F),v(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=i(`input`,F);n(F,I),v(I,`checkbox checkbox-sm`),c(I,`type`,`checkbox`),o(()=>{p(I,!!O.value)}),h(I,`input`,e=>{O.value=!!e.target.checked});let L=i(`span`,F);n(F,L),v(L,`label-text`),n(L,e(`传入 label`));let R=i(`div`,f);n(f,R),v(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=i(`span`,R);n(R,z),v(z,`text-sm font-medium`),n(z,e(`父组件 count`));let B=i(`input`,R);n(R,B),v(B,`range range-primary`),c(B,`type`,`range`),c(B,`min`,`0`),c(B,`max`,`12`),c(B,`step`,`1`),o(()=>{u(B,String(m.value))}),h(B,`input`,e=>{m.value=Number(e.target.value)});let V=i(`div`,f);n(f,V),v(V,`grid gap-3 md:grid-cols-3`);let H=a(`rue:component:anchor`);n(V,H),o(()=>{let e=y(w,{label:`raw query`,value:D.value?d.value:void 0});t(()=>_(e,V,H))});let U=a(`rue:component:anchor`);n(V,U),o(()=>{let e=y(w,{label:`raw label`,value:O.value?E.value:void 0});t(()=>_(e,V,U))});let W=a(`rue:component:anchor`);n(V,W),o(()=>{let e=y(w,{label:`raw count`,value:m.value});t(()=>_(e,V,W))}),n(r,e(` `));let G=a(`rue:component:anchor`);n(r,G),o(()=>{let e=y(T,{query:D.value?d.value:void 0,count:m.value,label:O.value?E.value:void 0});t(()=>_(e,r,G))}),n(r,e(` `));let K=i(`div`,r);return n(r,K),v(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),n(K,e(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),n(r,e(` `)),r}):``;t(()=>_(r,N,P))}),n(N,e(` `));let F=a(`rue:slot:anchor`);return n(N,F),o(()=>{let e=l.value===`code`?f(()=>{let e=s(),r=i(`div`,e);n(e,r),v(r,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let c=i(`div`,r);n(r,c),v(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=y(x,{className:`h-full`,lang:`tsx`,code:C});t(()=>_(e,c,l))}),e}):``;t(()=>_(e,N,F))}),r})}),g,b),g})};export{E as default};