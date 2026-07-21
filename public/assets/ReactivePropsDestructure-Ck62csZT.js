import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,jt as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h,wt as g}from"./context-8lXZvIn-.js";import{l as _,o as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=e=>_(t=>{let n=f(`div`,t);i(n,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let o=f(`span`,n);p(n,o),i(o,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let c=a(`rue:slot:anchor`);p(o,c),m(()=>{let t=e.label;h(()=>v(t,o,c))});let l=f(`span`,n);p(n,l),i(l,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let u=s(l);return p(l,u),m(()=>{r(u,String(e.value))}),n}),T=t=>{let{summary:r,latest:o,shadow:s}=b(`useSetup:0:0`,()=>e(()=>{let e=b(`computed:1:0`,()=>n(()=>`${t.label===void 0?`fallback-label`:t.label}:${(t.query===void 0?`fallback-query`:t.query).trim().toUpperCase()} x ${t.count}`)),r=b(`ref:1:1`,()=>d(``)),i=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>m(()=>{r.value=`${t.query===void 0?`fallback-query`:t.query}|${t.count}|${t.label===void 0?`fallback-label`:t.label}|${i(t.query===void 0?`fallback-query`:t.query)}`})),{summary:e,latest:r,shadow:i}}));return _(e=>{let n=f(`section`,e);i(n,`card border border-success/25 bg-base-100 shadow-sm`);let c=f(`div`,n);p(n,c),i(c,`card-body gap-4`);let u=f(`div`,c);p(c,u),i(u,`space-y-1`);let d=f(`div`,u);p(u,d),i(d,`badge badge-success badge-outline`),p(d,l(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let g=f(`h2`,u);p(u,g),i(g,`text-lg font-semibold`),p(g,l(`编译器改写后的解构 props`));let _=f(`p`,u);p(u,_),i(_,`text-sm leading-6 text-base-content/72`),p(_,l(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=f(`div`,c);p(c,b),i(b,`grid gap-3 md:grid-cols-2`);let x=a(`rue:component:anchor`);p(b,x),m(()=>{let e=y(w,{label:`summary.get()`,value:r.get()});h(()=>v(e,b,x))});let S=a(`rue:component:anchor`);p(b,S),m(()=>{let e=y(w,{label:`watchEffect latest`,value:o.value});h(()=>v(e,b,S))});let C=a(`rue:component:anchor`);p(b,C),m(()=>{let e=y(w,{label:`shadow(query)`,value:s(t.query===void 0?`fallback-query`:t.query)});h(()=>v(e,b,C))});let T=a(`rue:component:anchor`);return p(b,T),m(()=>{let e=y(w,{label:`render text`,value:`${t.query===void 0?`fallback-query`:t.query} / ${t.count} / ${t.label===void 0?`fallback-label`:t.label}`});h(()=>v(e,b,T))}),n})},E=()=>{let{activeTab:n,query:r,count:s,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>e(()=>({activeTab:b(`ref:1:3`,()=>d(`preview`)),query:b(`ref:1:4`,()=>d(` transfer `)),count:b(`ref:1:5`,()=>d(2)),label:b(`ref:1:6`,()=>d(`runtime-label`)),passQuery:b(`ref:1:7`,()=>d(!0)),passLabel:b(`ref:1:8`,()=>d(!0))})));return _(e=>{let d=o(),b=a(`rue:component:anchor`);return p(d,b),v(y(S,{children:_(()=>{let e=o(),d=f(`div`,e);p(e,d),i(d,`space-y-4`);let b=f(`div`,d);p(d,b),i(b,`space-y-3`);let S=f(`h1`,b);p(b,S),i(S,`text-4xl font-semibold tracking-tight`),p(S,l(`Reactive Props Destructure`));let k=f(`p`,b);p(b,k),i(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),p(k,l(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=f(`div`,d);p(d,A),t(A,`role`,`tablist`),i(A,`tabs tabs-box`);let j=f(`button`,A);p(A,j),t(j,`role`,`tab`),m(()=>{i(j,`tab ${n.value===`preview`?`tab-active`:``}`)}),u(j,`click`,()=>{n.value=`preview`}),p(j,l(`效果`));let M=f(`button`,A);p(A,M),t(M,`role`,`tab`),m(()=>{i(M,`tab ${n.value===`code`?`tab-active`:``}`)}),u(M,`click`,()=>{n.value=`code`}),p(M,l(`代码`));let N=f(`div`,d);p(d,N),i(N,`mt-4 grid gap-6 items-start`);let P=a(`rue:slot:anchor`);p(N,P),m(()=>{let e=n.value===`preview`?_(()=>{let e=o();p(e,l(` `));let n=f(`section`,e);p(e,n),i(n,`card border border-base-300 bg-base-100 shadow-sm`);let d=f(`div`,n);p(n,d),i(d,`card-body gap-5`);let _=f(`div`,d);p(d,_),i(_,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=f(`label`,_);p(_,b),i(b,`form-control grid gap-2`);let x=f(`span`,b);p(b,x),i(x,`label-text font-medium`),p(x,l(`父组件 query`));let S=f(`input`,b);p(b,S),i(S,`input input-bordered`),m(()=>{c(S,r.value)}),u(S,`input`,e=>{r.value=e.target.value});let C=f(`label`,_);p(_,C),i(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=f(`input`,C);p(C,k),i(k,`checkbox checkbox-sm`),t(k,`type`,`checkbox`),m(()=>{g(k,!!D.value)}),u(k,`input`,e=>{D.value=!!e.target.checked});let A=f(`span`,C);p(C,A),i(A,`label-text`),p(A,l(`传入 query`));let j=f(`div`,d);p(d,j),i(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=f(`label`,j);p(j,M),i(M,`form-control grid gap-2`);let N=f(`span`,M);p(M,N),i(N,`label-text font-medium`),p(N,l(`父组件 label`));let P=f(`input`,M);p(M,P),i(P,`input input-bordered`),m(()=>{c(P,E.value)}),u(P,`input`,e=>{E.value=e.target.value});let F=f(`label`,j);p(j,F),i(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=f(`input`,F);p(F,I),i(I,`checkbox checkbox-sm`),t(I,`type`,`checkbox`),m(()=>{g(I,!!O.value)}),u(I,`input`,e=>{O.value=!!e.target.checked});let L=f(`span`,F);p(F,L),i(L,`label-text`),p(L,l(`传入 label`));let R=f(`div`,d);p(d,R),i(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=f(`span`,R);p(R,z),i(z,`text-sm font-medium`),p(z,l(`父组件 count`));let B=f(`input`,R);p(R,B),i(B,`range range-primary`),t(B,`type`,`range`),t(B,`min`,`0`),t(B,`max`,`12`),t(B,`step`,`1`),m(()=>{c(B,String(s.value))}),u(B,`input`,e=>{s.value=Number(e.target.value)});let V=f(`div`,d);p(d,V),i(V,`grid gap-3 md:grid-cols-3`);let H=a(`rue:component:anchor`);p(V,H),m(()=>{let e=y(w,{label:`raw query`,value:D.value?r.value:void 0});h(()=>v(e,V,H))});let U=a(`rue:component:anchor`);p(V,U),m(()=>{let e=y(w,{label:`raw label`,value:O.value?E.value:void 0});h(()=>v(e,V,U))});let W=a(`rue:component:anchor`);p(V,W),m(()=>{let e=y(w,{label:`raw count`,value:s.value});h(()=>v(e,V,W))}),p(e,l(` `));let G=a(`rue:component:anchor`);p(e,G),m(()=>{let t=y(T,{query:D.value?r.value:void 0,count:s.value,label:O.value?E.value:void 0});h(()=>v(t,e,G))}),p(e,l(` `));let K=f(`div`,e);return p(e,K),i(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),p(K,l(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),p(e,l(` `)),e}):``;h(()=>v(e,N,P))}),p(N,l(` `));let F=a(`rue:slot:anchor`);return p(N,F),m(()=>{let e=n.value===`code`?_(()=>{let e=o(),t=f(`div`,e);p(e,t),i(t,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let n=f(`div`,t);p(t,n),i(n,`card-body p-0`);let r=a(`rue:component:anchor`);return p(n,r),m(()=>{let e=y(x,{className:`h-full`,lang:`tsx`,code:C});h(()=>v(e,n,r))}),e}):``;h(()=>v(e,N,F))}),e})}),d,b),d})};export{E as default};