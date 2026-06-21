import{$t as e,Jt as t,Q as n,St as r,Z as i,_t as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _,vt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as x}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=t=>u(r=>{let i=f(`div`,r);o(i,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let a=f(`span`,i);n(i,a),o(a,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let c=s(`rue:slot:anchor`);n(a,c),y(()=>{let n=t.label;e(()=>p(n,a,c))});let u=f(`span`,i);n(i,u),o(u,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let d=l(u);return n(u,d),y(()=>{v(d,String(t.value))}),i}),T=i=>{let{summary:a,latest:l,shadow:d}=b(`useSetup:0:0`,()=>c(()=>{let e=b(`computed:1:0`,()=>r(()=>`${i.label===void 0?`fallback-label`:i.label}:${(i.query===void 0?`fallback-query`:i.query).trim().toUpperCase()} x ${i.count}`)),n=b(`ref:1:1`,()=>t(``)),a=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>y(()=>{n.value=`${i.query===void 0?`fallback-query`:i.query}|${i.count}|${i.label===void 0?`fallback-label`:i.label}|${a(i.query===void 0?`fallback-query`:i.query)}`})),{summary:e,latest:n,shadow:a}}));return u(t=>{let r=f(`section`,t);o(r,`card border border-success/25 bg-base-100 shadow-sm`);let c=f(`div`,r);n(r,c),o(c,`card-body gap-4`);let u=f(`div`,c);n(c,u),o(u,`space-y-1`);let g=f(`div`,u);n(u,g),o(g,`badge badge-success badge-outline`),n(g,m(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let _=f(`h2`,u);n(u,_),o(_,`text-lg font-semibold`),n(_,m(`编译器改写后的解构 props`));let v=f(`p`,u);n(u,v),o(v,`text-sm leading-6 text-base-content/72`),n(v,m(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=f(`div`,c);n(c,b),o(b,`grid gap-3 md:grid-cols-2`);let x=s(`rue:component:anchor`);n(b,x),y(()=>{let t=h(w,{label:`summary.get()`,value:a.get()});e(()=>p(t,b,x))});let S=s(`rue:component:anchor`);n(b,S),y(()=>{let t=h(w,{label:`watchEffect latest`,value:l.value});e(()=>p(t,b,S))});let C=s(`rue:component:anchor`);n(b,C),y(()=>{let t=h(w,{label:`shadow(query)`,value:d(i.query===void 0?`fallback-query`:i.query)});e(()=>p(t,b,C))});let T=s(`rue:component:anchor`);return n(b,T),y(()=>{let t=h(w,{label:`render text`,value:`${i.query===void 0?`fallback-query`:i.query} / ${i.count} / ${i.label===void 0?`fallback-label`:i.label}`});e(()=>p(t,b,T))}),r})},E=()=>{let{activeTab:r,query:l,count:v,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>c(()=>({activeTab:b(`ref:1:3`,()=>t(`preview`)),query:b(`ref:1:4`,()=>t(` transfer `)),count:b(`ref:1:5`,()=>t(2)),label:b(`ref:1:6`,()=>t(`runtime-label`)),passQuery:b(`ref:1:7`,()=>t(!0)),passLabel:b(`ref:1:8`,()=>t(!0))})));return u(t=>{let c=g(),b=s(`rue:component:anchor`);return n(c,b),p(h(S,{children:u(()=>{let t=g(),c=f(`div`,t);n(t,c),o(c,`space-y-4`);let b=f(`div`,c);n(c,b),o(b,`space-y-3`);let S=f(`h1`,b);n(b,S),o(S,`text-4xl font-semibold tracking-tight`),n(S,m(`Reactive Props Destructure`));let k=f(`p`,b);n(b,k),o(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),n(k,m(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=f(`div`,c);n(c,A),d(A,`role`,`tablist`),o(A,`tabs tabs-box`);let j=f(`button`,A);n(A,j),d(j,`role`,`tab`),y(()=>{o(j,`tab ${r.value===`preview`?`tab-active`:``}`)}),i(j,`click`,()=>{r.value=`preview`}),n(j,m(`效果`));let M=f(`button`,A);n(A,M),d(M,`role`,`tab`),y(()=>{o(M,`tab ${r.value===`code`?`tab-active`:``}`)}),i(M,`click`,()=>{r.value=`code`}),n(M,m(`代码`));let N=f(`div`,c);n(c,N),o(N,`mt-4 grid gap-6 items-start`);let P=s(`rue:slot:anchor`);n(N,P),y(()=>{let t=r.value===`preview`?u(()=>{let t=g();n(t,m(` `));let r=f(`section`,t);n(t,r),o(r,`card border border-base-300 bg-base-100 shadow-sm`);let c=f(`div`,r);n(r,c),o(c,`card-body gap-5`);let u=f(`div`,c);n(c,u),o(u,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=f(`label`,u);n(u,b),o(b,`form-control grid gap-2`);let x=f(`span`,b);n(b,x),o(x,`label-text font-medium`),n(x,m(`父组件 query`));let S=f(`input`,b);n(b,S),o(S,`input input-bordered`),y(()=>{a(S,l.value)}),i(S,`input`,e=>{l.value=e.target.value});let C=f(`label`,u);n(u,C),o(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=f(`input`,C);n(C,k),o(k,`checkbox checkbox-sm`),d(k,`type`,`checkbox`),y(()=>{_(k,!!D.value)}),i(k,`input`,e=>{D.value=!!e.target.checked});let A=f(`span`,C);n(C,A),o(A,`label-text`),n(A,m(`传入 query`));let j=f(`div`,c);n(c,j),o(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=f(`label`,j);n(j,M),o(M,`form-control grid gap-2`);let N=f(`span`,M);n(M,N),o(N,`label-text font-medium`),n(N,m(`父组件 label`));let P=f(`input`,M);n(M,P),o(P,`input input-bordered`),y(()=>{a(P,E.value)}),i(P,`input`,e=>{E.value=e.target.value});let F=f(`label`,j);n(j,F),o(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=f(`input`,F);n(F,I),o(I,`checkbox checkbox-sm`),d(I,`type`,`checkbox`),y(()=>{_(I,!!O.value)}),i(I,`input`,e=>{O.value=!!e.target.checked});let L=f(`span`,F);n(F,L),o(L,`label-text`),n(L,m(`传入 label`));let R=f(`div`,c);n(c,R),o(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=f(`span`,R);n(R,z),o(z,`text-sm font-medium`),n(z,m(`父组件 count`));let B=f(`input`,R);n(R,B),o(B,`range range-primary`),d(B,`type`,`range`),d(B,`min`,`0`),d(B,`max`,`12`),d(B,`step`,`1`),y(()=>{a(B,String(v.value))}),i(B,`input`,e=>{v.value=Number(e.target.value)});let V=f(`div`,c);n(c,V),o(V,`grid gap-3 md:grid-cols-3`);let H=s(`rue:component:anchor`);n(V,H),y(()=>{let t=h(w,{label:`raw query`,value:D.value?l.value:void 0});e(()=>p(t,V,H))});let U=s(`rue:component:anchor`);n(V,U),y(()=>{let t=h(w,{label:`raw label`,value:O.value?E.value:void 0});e(()=>p(t,V,U))});let W=s(`rue:component:anchor`);n(V,W),y(()=>{let t=h(w,{label:`raw count`,value:v.value});e(()=>p(t,V,W))}),n(t,m(` `));let G=s(`rue:component:anchor`);n(t,G),y(()=>{let n=h(T,{query:D.value?l.value:void 0,count:v.value,label:O.value?E.value:void 0});e(()=>p(n,t,G))}),n(t,m(` `));let K=f(`div`,t);return n(t,K),o(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),n(K,m(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),n(t,m(` `)),t}):``;e(()=>p(t,N,P))}),n(N,m(` `));let F=s(`rue:slot:anchor`);return n(N,F),y(()=>{let t=r.value===`code`?u(()=>{let t=g(),r=f(`div`,t);n(t,r),o(r,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let i=f(`div`,r);n(r,i),o(i,`card-body p-0`);let a=s(`rue:component:anchor`);return n(i,a),y(()=>{let t=h(x,{className:`h-full`,lang:`tsx`,code:C});e(()=>p(t,i,a))}),t}):``;e(()=>p(t,N,F))}),t})}),c,b),c})};export{E as default};