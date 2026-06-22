import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ft as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _,wt as v,yt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-C5NjdoiC.js";import{r as S}from"./SidebarPlaygroundExample-DpItFif-.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=n=>l(r=>{let o=m(`div`,r);p(o,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let s=m(`span`,o);e(o,s),p(s,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let c=_(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.label;g(()=>d(e,s,c))});let l=m(`span`,o);e(o,l),p(l,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let u=i(l);return e(l,u),t(()=>{a(u,String(n.value))}),o}),T=r=>{let{summary:i,latest:a,shadow:o}=b(`useSetup:0:0`,()=>f(()=>{let e=b(`computed:1:0`,()=>v(()=>`${r.label===void 0?`fallback-label`:r.label}:${(r.query===void 0?`fallback-query`:r.query).trim().toUpperCase()} x ${r.count}`)),i=b(`ref:1:1`,()=>n(``)),a=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>t(()=>{i.value=`${r.query===void 0?`fallback-query`:r.query}|${r.count}|${r.label===void 0?`fallback-label`:r.label}|${a(r.query===void 0?`fallback-query`:r.query)}`})),{summary:e,latest:i,shadow:a}}));return l(n=>{let s=m(`section`,n);p(s,`card border border-success/25 bg-base-100 shadow-sm`);let l=m(`div`,s);e(s,l),p(l,`card-body gap-4`);let u=m(`div`,l);e(l,u),p(u,`space-y-1`);let f=m(`div`,u);e(u,f),p(f,`badge badge-success badge-outline`),e(f,c(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let v=m(`h2`,u);e(u,v),p(v,`text-lg font-semibold`),e(v,c(`编译器改写后的解构 props`));let y=m(`p`,u);e(u,y),p(y,`text-sm leading-6 text-base-content/72`),e(y,c(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=m(`div`,l);e(l,b),p(b,`grid gap-3 md:grid-cols-2`);let x=_(`rue:component:anchor`);e(b,x),t(()=>{let e=h(w,{label:`summary.get()`,value:i.get()});g(()=>d(e,b,x))});let S=_(`rue:component:anchor`);e(b,S),t(()=>{let e=h(w,{label:`watchEffect latest`,value:a.value});g(()=>d(e,b,S))});let C=_(`rue:component:anchor`);e(b,C),t(()=>{let e=h(w,{label:`shadow(query)`,value:o(r.query===void 0?`fallback-query`:r.query)});g(()=>d(e,b,C))});let T=_(`rue:component:anchor`);return e(b,T),t(()=>{let e=h(w,{label:`render text`,value:`${r.query===void 0?`fallback-query`:r.query} / ${r.count} / ${r.label===void 0?`fallback-label`:r.label}`});g(()=>d(e,b,T))}),s})},E=()=>{let{activeTab:i,query:a,count:v,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>f(()=>({activeTab:b(`ref:1:3`,()=>n(`preview`)),query:b(`ref:1:4`,()=>n(` transfer `)),count:b(`ref:1:5`,()=>n(2)),label:b(`ref:1:6`,()=>n(`runtime-label`)),passQuery:b(`ref:1:7`,()=>n(!0)),passLabel:b(`ref:1:8`,()=>n(!0))})));return l(n=>{let f=u(),b=_(`rue:component:anchor`);return e(f,b),d(h(S,{children:l(()=>{let n=u(),f=m(`div`,n);e(n,f),p(f,`space-y-4`);let b=m(`div`,f);e(f,b),p(b,`space-y-3`);let S=m(`h1`,b);e(b,S),p(S,`text-4xl font-semibold tracking-tight`),e(S,c(`Reactive Props Destructure`));let k=m(`p`,b);e(b,k),p(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),e(k,c(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=m(`div`,f);e(f,A),o(A,`role`,`tablist`),p(A,`tabs tabs-box`);let j=m(`button`,A);e(A,j),o(j,`role`,`tab`),t(()=>{p(j,`tab ${i.value===`preview`?`tab-active`:``}`)}),r(j,`click`,()=>{i.value=`preview`}),e(j,c(`效果`));let M=m(`button`,A);e(A,M),o(M,`role`,`tab`),t(()=>{p(M,`tab ${i.value===`code`?`tab-active`:``}`)}),r(M,`click`,()=>{i.value=`code`}),e(M,c(`代码`));let N=m(`div`,f);e(f,N),p(N,`mt-4 grid gap-6 items-start`);let P=_(`rue:slot:anchor`);e(N,P),t(()=>{let n=i.value===`preview`?l(()=>{let n=u();e(n,c(` `));let i=m(`section`,n);e(n,i),p(i,`card border border-base-300 bg-base-100 shadow-sm`);let l=m(`div`,i);e(i,l),p(l,`card-body gap-5`);let f=m(`div`,l);e(l,f),p(f,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=m(`label`,f);e(f,b),p(b,`form-control grid gap-2`);let x=m(`span`,b);e(b,x),p(x,`label-text font-medium`),e(x,c(`父组件 query`));let S=m(`input`,b);e(b,S),p(S,`input input-bordered`),t(()=>{y(S,a.value)}),r(S,`input`,e=>{a.value=e.target.value});let C=m(`label`,f);e(f,C),p(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=m(`input`,C);e(C,k),p(k,`checkbox checkbox-sm`),o(k,`type`,`checkbox`),t(()=>{s(k,!!D.value)}),r(k,`input`,e=>{D.value=!!e.target.checked});let A=m(`span`,C);e(C,A),p(A,`label-text`),e(A,c(`传入 query`));let j=m(`div`,l);e(l,j),p(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=m(`label`,j);e(j,M),p(M,`form-control grid gap-2`);let N=m(`span`,M);e(M,N),p(N,`label-text font-medium`),e(N,c(`父组件 label`));let P=m(`input`,M);e(M,P),p(P,`input input-bordered`),t(()=>{y(P,E.value)}),r(P,`input`,e=>{E.value=e.target.value});let F=m(`label`,j);e(j,F),p(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=m(`input`,F);e(F,I),p(I,`checkbox checkbox-sm`),o(I,`type`,`checkbox`),t(()=>{s(I,!!O.value)}),r(I,`input`,e=>{O.value=!!e.target.checked});let L=m(`span`,F);e(F,L),p(L,`label-text`),e(L,c(`传入 label`));let R=m(`div`,l);e(l,R),p(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=m(`span`,R);e(R,z),p(z,`text-sm font-medium`),e(z,c(`父组件 count`));let B=m(`input`,R);e(R,B),p(B,`range range-primary`),o(B,`type`,`range`),o(B,`min`,`0`),o(B,`max`,`12`),o(B,`step`,`1`),t(()=>{y(B,String(v.value))}),r(B,`input`,e=>{v.value=Number(e.target.value)});let V=m(`div`,l);e(l,V),p(V,`grid gap-3 md:grid-cols-3`);let H=_(`rue:component:anchor`);e(V,H),t(()=>{let e=h(w,{label:`raw query`,value:D.value?a.value:void 0});g(()=>d(e,V,H))});let U=_(`rue:component:anchor`);e(V,U),t(()=>{let e=h(w,{label:`raw label`,value:O.value?E.value:void 0});g(()=>d(e,V,U))});let W=_(`rue:component:anchor`);e(V,W),t(()=>{let e=h(w,{label:`raw count`,value:v.value});g(()=>d(e,V,W))}),e(n,c(` `));let G=_(`rue:component:anchor`);e(n,G),t(()=>{let e=h(T,{query:D.value?a.value:void 0,count:v.value,label:O.value?E.value:void 0});g(()=>d(e,n,G))}),e(n,c(` `));let K=m(`div`,n);return e(n,K),p(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),e(K,c(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),e(n,c(` `)),n}):``;g(()=>d(n,N,P))}),e(N,c(` `));let F=_(`rue:slot:anchor`);return e(N,F),t(()=>{let n=i.value===`code`?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let i=m(`div`,r);e(r,i),p(i,`card-body p-0`);let a=_(`rue:component:anchor`);return e(i,a),t(()=>{let e=h(x,{className:`h-full`,lang:`tsx`,code:C});g(()=>d(e,i,a))}),n}):``;g(()=>d(n,N,F))}),n})}),f,b),f})};export{E as default};