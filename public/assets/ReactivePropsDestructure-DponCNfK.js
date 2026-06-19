import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,ht as u,l as d,lt as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v,yt as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as x}from"./Code-D5UqTwV6.js";import{r as S}from"./SidebarPlaygroundExample-D2vGHFCu.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=n=>d(i=>{let a=_(`div`,i);v(a,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let s=_(`span`,a);o(a,s),v(s,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let c=e(`rue:slot:anchor`);o(s,c),t(()=>{let e=n.label;r(()=>m(e,s,c))});let u=_(`span`,a);o(a,u),v(u,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let d=h(u);return o(u,d),t(()=>{l(d,String(n.value))}),a}),T=i=>{let{summary:s,latest:c,shadow:l}=b(`useSetup:0:0`,()=>a(()=>{let e=b(`computed:1:0`,()=>y(()=>`${i.label===void 0?`fallback-label`:i.label}:${(i.query===void 0?`fallback-query`:i.query).trim().toUpperCase()} x ${i.count}`)),r=b(`ref:1:1`,()=>n(``)),a=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>t(()=>{r.value=`${i.query===void 0?`fallback-query`:i.query}|${i.count}|${i.label===void 0?`fallback-label`:i.label}|${a(i.query===void 0?`fallback-query`:i.query)}`})),{summary:e,latest:r,shadow:a}}));return d(n=>{let a=_(`section`,n);v(a,`card border border-success/25 bg-base-100 shadow-sm`);let u=_(`div`,a);o(a,u),v(u,`card-body gap-4`);let d=_(`div`,u);o(u,d),v(d,`space-y-1`);let f=_(`div`,d);o(d,f),v(f,`badge badge-success badge-outline`),o(f,p(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let h=_(`h2`,d);o(d,h),v(h,`text-lg font-semibold`),o(h,p(`编译器改写后的解构 props`));let y=_(`p`,d);o(d,y),v(y,`text-sm leading-6 text-base-content/72`),o(y,p(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=_(`div`,u);o(u,b),v(b,`grid gap-3 md:grid-cols-2`);let x=e(`rue:component:anchor`);o(b,x),t(()=>{let e=g(w,{label:`summary.get()`,value:s.get()});r(()=>m(e,b,x))});let S=e(`rue:component:anchor`);o(b,S),t(()=>{let e=g(w,{label:`watchEffect latest`,value:c.value});r(()=>m(e,b,S))});let C=e(`rue:component:anchor`);o(b,C),t(()=>{let e=g(w,{label:`shadow(query)`,value:l(i.query===void 0?`fallback-query`:i.query)});r(()=>m(e,b,C))});let T=e(`rue:component:anchor`);return o(b,T),t(()=>{let e=g(w,{label:`render text`,value:`${i.query===void 0?`fallback-query`:i.query} / ${i.count} / ${i.label===void 0?`fallback-label`:i.label}`});r(()=>m(e,b,T))}),a})},E=()=>{let{activeTab:l,query:h,count:y,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>a(()=>({activeTab:b(`ref:1:3`,()=>n(`preview`)),query:b(`ref:1:4`,()=>n(` transfer `)),count:b(`ref:1:5`,()=>n(2)),label:b(`ref:1:6`,()=>n(`runtime-label`)),passQuery:b(`ref:1:7`,()=>n(!0)),passLabel:b(`ref:1:8`,()=>n(!0))})));return d(n=>{let a=c(),b=e(`rue:component:anchor`);return o(a,b),m(g(S,{children:d(()=>{let n=c(),a=_(`div`,n);o(n,a),v(a,`space-y-4`);let b=_(`div`,a);o(a,b),v(b,`space-y-3`);let S=_(`h1`,b);o(b,S),v(S,`text-4xl font-semibold tracking-tight`),o(S,p(`Reactive Props Destructure`));let k=_(`p`,b);o(b,k),v(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(k,p(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=_(`div`,a);o(a,A),s(A,`role`,`tablist`),v(A,`tabs tabs-box`);let j=_(`button`,A);o(A,j),s(j,`role`,`tab`),t(()=>{v(j,`tab ${l.value===`preview`?`tab-active`:``}`)}),i(j,`click`,()=>{l.value=`preview`}),o(j,p(`效果`));let M=_(`button`,A);o(A,M),s(M,`role`,`tab`),t(()=>{v(M,`tab ${l.value===`code`?`tab-active`:``}`)}),i(M,`click`,()=>{l.value=`code`}),o(M,p(`代码`));let N=_(`div`,a);o(a,N),v(N,`mt-4 grid gap-6 items-start`);let P=e(`rue:slot:anchor`);o(N,P),t(()=>{let n=l.value===`preview`?d(()=>{let n=c();o(n,p(` `));let a=_(`section`,n);o(n,a),v(a,`card border border-base-300 bg-base-100 shadow-sm`);let l=_(`div`,a);o(a,l),v(l,`card-body gap-5`);let d=_(`div`,l);o(l,d),v(d,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=_(`label`,d);o(d,b),v(b,`form-control grid gap-2`);let x=_(`span`,b);o(b,x),v(x,`label-text font-medium`),o(x,p(`父组件 query`));let S=_(`input`,b);o(b,S),v(S,`input input-bordered`),t(()=>{u(S,h.value)}),i(S,`input`,e=>{h.value=e.target.value});let C=_(`label`,d);o(d,C),v(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=_(`input`,C);o(C,k),v(k,`checkbox checkbox-sm`),s(k,`type`,`checkbox`),t(()=>{f(k,!!D.value)}),i(k,`input`,e=>{D.value=!!e.target.checked});let A=_(`span`,C);o(C,A),v(A,`label-text`),o(A,p(`传入 query`));let j=_(`div`,l);o(l,j),v(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=_(`label`,j);o(j,M),v(M,`form-control grid gap-2`);let N=_(`span`,M);o(M,N),v(N,`label-text font-medium`),o(N,p(`父组件 label`));let P=_(`input`,M);o(M,P),v(P,`input input-bordered`),t(()=>{u(P,E.value)}),i(P,`input`,e=>{E.value=e.target.value});let F=_(`label`,j);o(j,F),v(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=_(`input`,F);o(F,I),v(I,`checkbox checkbox-sm`),s(I,`type`,`checkbox`),t(()=>{f(I,!!O.value)}),i(I,`input`,e=>{O.value=!!e.target.checked});let L=_(`span`,F);o(F,L),v(L,`label-text`),o(L,p(`传入 label`));let R=_(`div`,l);o(l,R),v(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=_(`span`,R);o(R,z),v(z,`text-sm font-medium`),o(z,p(`父组件 count`));let B=_(`input`,R);o(R,B),v(B,`range range-primary`),s(B,`type`,`range`),s(B,`min`,`0`),s(B,`max`,`12`),s(B,`step`,`1`),t(()=>{u(B,String(y.value))}),i(B,`input`,e=>{y.value=Number(e.target.value)});let V=_(`div`,l);o(l,V),v(V,`grid gap-3 md:grid-cols-3`);let H=e(`rue:component:anchor`);o(V,H),t(()=>{let e=g(w,{label:`raw query`,value:D.value?h.value:void 0});r(()=>m(e,V,H))});let U=e(`rue:component:anchor`);o(V,U),t(()=>{let e=g(w,{label:`raw label`,value:O.value?E.value:void 0});r(()=>m(e,V,U))});let W=e(`rue:component:anchor`);o(V,W),t(()=>{let e=g(w,{label:`raw count`,value:y.value});r(()=>m(e,V,W))}),o(n,p(` `));let G=e(`rue:component:anchor`);o(n,G),t(()=>{let e=g(T,{query:D.value?h.value:void 0,count:y.value,label:O.value?E.value:void 0});r(()=>m(e,n,G))}),o(n,p(` `));let K=_(`div`,n);return o(n,K),v(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(K,p(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),o(n,p(` `)),n}):``;r(()=>m(n,N,P))}),o(N,p(` `));let F=e(`rue:slot:anchor`);return o(N,F),t(()=>{let n=l.value===`code`?d(()=>{let n=c(),i=_(`div`,n);o(n,i),v(i,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let a=_(`div`,i);o(i,a),v(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});r(()=>m(e,a,s))}),n}):``;r(()=>m(n,N,F))}),n})}),a,b),a})};export{E as default};