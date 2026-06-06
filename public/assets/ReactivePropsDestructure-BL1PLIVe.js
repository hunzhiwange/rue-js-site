import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,gt as d,l as f,mt as p,ot as m,pt as h,s as g,st as _,t as v,tt as y}from"./vapor-runtime-DHPuOjqh.js";import{a as b}from"./vapor-helpers-vapor-CJFAWine.js";import{t as x}from"./Code-Ds9lKLk6.js";import{t as S}from"./SidebarPlaygroundExample-KML-rOvA.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=t=>f(n=>{let r=e(`div`,n);l(r,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let i=e(`span`,r);o(r,i),l(i,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let u=c(`rue:slot:anchor`);o(i,u),s(()=>{let e=t.label;a(()=>g(e,i,u))});let d=e(`span`,r);o(r,d),l(d,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let f=y(d);return o(d,f),s(()=>{p(f,String(t.value))}),r}),T=t=>{let{summary:i,latest:p,shadow:m}=b(`useSetup:0:0`,()=>n(()=>{let e=b(`computed:1:0`,()=>d(()=>`${t.label===void 0?`fallback-label`:t.label}:${(t.query===void 0?`fallback-query`:t.query).trim().toUpperCase()} x ${t.count}`)),n=b(`ref:1:1`,()=>r(``)),i=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>s(()=>{n.value=`${t.query===void 0?`fallback-query`:t.query}|${t.count}|${t.label===void 0?`fallback-label`:t.label}|${i(t.query===void 0?`fallback-query`:t.query)}`})),{summary:e,latest:n,shadow:i}}));return f(n=>{let r=e(`section`,n);l(r,`card border border-success/25 bg-base-100 shadow-sm`);let d=e(`div`,r);o(r,d),l(d,`card-body gap-4`);let f=e(`div`,d);o(d,f),l(f,`space-y-1`);let h=e(`div`,f);o(f,h),l(h,`badge badge-success badge-outline`),o(h,u(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let _=e(`h2`,f);o(f,_),l(_,`text-lg font-semibold`),o(_,u(`编译器改写后的解构 props`));let y=e(`p`,f);o(f,y),l(y,`text-sm leading-6 text-base-content/72`),o(y,u(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=e(`div`,d);o(d,b),l(b,`grid gap-3 md:grid-cols-2`);let x=c(`rue:component:anchor`);o(b,x),s(()=>{let e=v(w,{label:`summary.get()`,value:i.get()});a(()=>g(e,b,x))});let S=c(`rue:component:anchor`);o(b,S),s(()=>{let e=v(w,{label:`watchEffect latest`,value:p.value});a(()=>g(e,b,S))});let C=c(`rue:component:anchor`);o(b,C),s(()=>{let e=v(w,{label:`shadow(query)`,value:m(t.query===void 0?`fallback-query`:t.query)});a(()=>g(e,b,C))});let T=c(`rue:component:anchor`);return o(b,T),s(()=>{let e=v(w,{label:`render text`,value:`${t.query===void 0?`fallback-query`:t.query} / ${t.count} / ${t.label===void 0?`fallback-label`:t.label}`});a(()=>g(e,b,T))}),r})},E=()=>{let{activeTab:d,query:p,count:y,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>n(()=>({activeTab:b(`ref:1:3`,()=>r(`preview`)),query:b(`ref:1:4`,()=>r(` transfer `)),count:b(`ref:1:5`,()=>r(2)),label:b(`ref:1:6`,()=>r(`runtime-label`)),passQuery:b(`ref:1:7`,()=>r(!0)),passLabel:b(`ref:1:8`,()=>r(!0))})));return f(n=>{let r=i(),b=c(`rue:component:anchor`);return o(r,b),g(v(S,{children:f(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`space-y-4`);let b=e(`div`,r);o(r,b),l(b,`space-y-3`);let S=e(`h1`,b);o(b,S),l(S,`text-4xl font-semibold tracking-tight`),o(S,u(`Reactive Props Destructure`));let k=e(`p`,b);o(b,k),l(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(k,u(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=e(`div`,r);o(r,A),m(A,`role`,`tablist`),l(A,`tabs tabs-box`);let j=e(`button`,A);o(A,j),m(j,`role`,`tab`),s(()=>{l(j,String(`tab ${d.value===`preview`?`tab-active`:``}`))}),t(j,`click`,()=>{d.value=`preview`}),o(j,u(`效果`));let M=e(`button`,A);o(A,M),m(M,`role`,`tab`),s(()=>{l(M,String(`tab ${d.value===`code`?`tab-active`:``}`))}),t(M,`click`,()=>{d.value=`code`}),o(M,u(`代码`));let N=e(`div`,r);o(r,N),l(N,`mt-4 grid gap-6 items-start`);let P=c(`rue:slot:anchor`);o(N,P),s(()=>{let n=d.value===`preview`?f(()=>{let n=i();o(n,u(` `));let r=e(`section`,n);o(n,r),l(r,`card border border-base-300 bg-base-100 shadow-sm`);let d=e(`div`,r);o(r,d),l(d,`card-body gap-5`);let f=e(`div`,d);o(d,f),l(f,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=e(`label`,f);o(f,b),l(b,`form-control grid gap-2`);let x=e(`span`,b);o(b,x),l(x,`label-text font-medium`),o(x,u(`父组件 query`));let S=e(`input`,b);o(b,S),l(S,`input input-bordered`),s(()=>{h(S,p.value)}),t(S,`input`,e=>{p.value=e.target.value});let C=e(`label`,f);o(f,C),l(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=e(`input`,C);o(C,k),l(k,`checkbox checkbox-sm`),m(k,`type`,`checkbox`),s(()=>{_(k,!!D.value)}),t(k,`input`,e=>{D.value=!!e.target.checked});let A=e(`span`,C);o(C,A),l(A,`label-text`),o(A,u(`传入 query`));let j=e(`div`,d);o(d,j),l(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=e(`label`,j);o(j,M),l(M,`form-control grid gap-2`);let N=e(`span`,M);o(M,N),l(N,`label-text font-medium`),o(N,u(`父组件 label`));let P=e(`input`,M);o(M,P),l(P,`input input-bordered`),s(()=>{h(P,E.value)}),t(P,`input`,e=>{E.value=e.target.value});let F=e(`label`,j);o(j,F),l(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=e(`input`,F);o(F,I),l(I,`checkbox checkbox-sm`),m(I,`type`,`checkbox`),s(()=>{_(I,!!O.value)}),t(I,`input`,e=>{O.value=!!e.target.checked});let L=e(`span`,F);o(F,L),l(L,`label-text`),o(L,u(`传入 label`));let R=e(`div`,d);o(d,R),l(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=e(`span`,R);o(R,z),l(z,`text-sm font-medium`),o(z,u(`父组件 count`));let B=e(`input`,R);o(R,B),l(B,`range range-primary`),m(B,`type`,`range`),m(B,`min`,`0`),m(B,`max`,`12`),m(B,`step`,`1`),s(()=>{h(B,String(y.value))}),t(B,`input`,e=>{y.value=Number(e.target.value)});let V=e(`div`,d);o(d,V),l(V,`grid gap-3 md:grid-cols-3`);let H=c(`rue:component:anchor`);o(V,H),s(()=>{let e=v(w,{label:`raw query`,value:D.value?p.value:void 0});a(()=>g(e,V,H))});let U=c(`rue:component:anchor`);o(V,U),s(()=>{let e=v(w,{label:`raw label`,value:O.value?E.value:void 0});a(()=>g(e,V,U))});let W=c(`rue:component:anchor`);o(V,W),s(()=>{let e=v(w,{label:`raw count`,value:y.value});a(()=>g(e,V,W))}),o(n,u(` `));let G=c(`rue:component:anchor`);o(n,G),s(()=>{let e=v(T,{query:D.value?p.value:void 0,count:y.value,label:O.value?E.value:void 0});a(()=>g(e,n,G))}),o(n,u(` `));let K=e(`div`,n);return o(n,K),l(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(K,u(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),o(n,u(` `)),n}):``;a(()=>g(n,N,P))}),o(N,u(` `));let F=c(`rue:slot:anchor`);return o(N,F),s(()=>{let t=d.value===`code`?f(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:C});a(()=>g(e,r,u))}),t}):``;a(()=>g(t,N,F))}),n})}),r,b),r})};export{E as default};