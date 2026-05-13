import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,W as c,X as l,Z as u,_t as d,at as f,bt as p,c as m,j as h,lt as g,pt as _,t as v,u as y}from"./vapor-runtime-D3a-68js.js";import{a as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as x}from"./Code-2C2psoH3.js";import{t as S}from"./SidebarPlaygroundExample-DKa0aI1C.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
      <span className="text-xs uppercase tracking-[0.18em] text-base-content/45">{props.label}</span>
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
          <div className="badge badge-success badge-outline">/* RUE_REACTIVE_PROPS_DESTRUCTURED */</div>
          <h2 className="text-lg font-semibold">编译器改写后的解构 props</h2>
          <p className="text-sm leading-6 text-base-content/72">
            这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。
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
            这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。
            所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。
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
                观察重点：
                1. 关闭 query 或 label 传入后，子组件会退回默认值。
                2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。
                3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。
                4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() =&gt; query, ...)。
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

export default ReactivePropsDestructure`,w=e=>y(()=>{let r=n(`div`);t(r,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let s=n(`span`);i(r,s),t(s,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let c=a(`rue:slot:anchor`);i(s,c),p(()=>{let t=e.label;_(()=>m(t,s,c))});let l=n(`span`);i(r,l),t(l,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let d=o(l);return i(l,d),p(()=>{u(d,String(e.value))}),r}),T=e=>{let{summary:o,latest:s,shadow:c}=b(`useSetup:0:0`,()=>d(()=>{let t=b(`computed:1:0`,()=>f(()=>`${e.label===void 0?`fallback-label`:e.label}:${(e.query===void 0?`fallback-query`:e.query).trim().toUpperCase()} x ${e.count}`)),n=b(`ref:1:1`,()=>g(``)),r=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>p(()=>{n.value=`${e.query===void 0?`fallback-query`:e.query}|${e.count}|${e.label===void 0?`fallback-label`:e.label}|${r(e.query===void 0?`fallback-query`:e.query)}`})),{summary:t,latest:n,shadow:r}}));return y(()=>{let l=n(`section`);t(l,`card border border-success/25 bg-base-100 shadow-sm`);let u=n(`div`);i(l,u),t(u,`card-body gap-4`);let d=n(`div`);i(u,d),t(d,`space-y-1`);let f=n(`div`);i(d,f),t(f,`badge badge-success badge-outline`),i(f,r(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let h=n(`h2`);i(d,h),t(h,`text-lg font-semibold`),i(h,r(`编译器改写后的解构 props`));let g=n(`p`);i(d,g),t(g,`text-sm leading-6 text-base-content/72`),i(g,r(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let y=n(`div`);i(u,y),t(y,`grid gap-3 md:grid-cols-2`);let b=a(`rue:component:anchor`);i(y,b),p(()=>{let e=v(w,{label:`summary.get()`,value:o.get()});_(()=>m(e,y,b))});let x=a(`rue:component:anchor`);i(y,x),p(()=>{let e=v(w,{label:`watchEffect latest`,value:s.value});_(()=>m(e,y,x))});let S=a(`rue:component:anchor`);i(y,S),p(()=>{let t=v(w,{label:`shadow(query)`,value:c(e.query===void 0?`fallback-query`:e.query)});_(()=>m(t,y,S))});let C=a(`rue:component:anchor`);return i(y,C),p(()=>{let t=v(w,{label:`render text`,value:`${e.query===void 0?`fallback-query`:e.query} / ${e.count} / ${e.label===void 0?`fallback-label`:e.label}`});_(()=>m(t,y,C))}),l})},E=()=>{let{activeTab:o,query:u,count:f,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>d(()=>({activeTab:b(`ref:1:3`,()=>g(`preview`)),query:b(`ref:1:4`,()=>g(` transfer `)),count:b(`ref:1:5`,()=>g(2)),label:b(`ref:1:6`,()=>g(`runtime-label`)),passQuery:b(`ref:1:7`,()=>g(!0)),passLabel:b(`ref:1:8`,()=>g(!0))})));return y(()=>{let d=e(),g=a(`rue:component:anchor`);return i(d,g),m(v(S,{children:y(()=>{let d=e(),g=n(`div`);i(d,g),t(g,`space-y-4`);let b=n(`div`);i(g,b),t(b,`space-y-3`);let S=n(`h1`);i(b,S),t(S,`text-4xl font-semibold tracking-tight`),i(S,r(`Reactive Props Destructure`));let k=n(`p`);i(b,k),t(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),i(k,r(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=n(`div`);i(g,A),s(A,`role`,`tablist`),t(A,`tabs tabs-box`);let j=n(`button`);i(A,j),s(j,`role`,`tab`),p(()=>{t(j,String(`tab ${o.value===`preview`?`tab-active`:``}`))}),h(j,`click`,()=>{o.value=`preview`}),i(j,r(`效果`));let M=n(`button`);i(A,M),s(M,`role`,`tab`),p(()=>{t(M,String(`tab ${o.value===`code`?`tab-active`:``}`))}),h(M,`click`,()=>{o.value=`code`}),i(M,r(`代码`));let N=n(`div`);i(g,N),t(N,`mt-4 grid gap-6 items-start`);let P=a(`rue:slot:anchor`);i(N,P),p(()=>{let d=o.value===`preview`?y(()=>{let o=e();i(o,r(` `));let d=n(`section`);i(o,d),t(d,`card border border-base-300 bg-base-100 shadow-sm`);let g=n(`div`);i(d,g),t(g,`card-body gap-5`);let y=n(`div`);i(g,y),t(y,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=n(`label`);i(y,b),t(b,`form-control grid gap-2`);let x=n(`span`);i(b,x),t(x,`label-text font-medium`),i(x,r(`父组件 query`));let S=n(`input`);i(b,S),t(S,`input input-bordered`),p(()=>{l(S,u.value)}),h(S,`input`,e=>{u.value=e.target.value});let C=n(`label`);i(y,C),t(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=n(`input`);i(C,k),t(k,`checkbox checkbox-sm`),s(k,`type`,`checkbox`),p(()=>{c(k,!!D.value)}),h(k,`input`,e=>{D.value=!!e.target.checked});let A=n(`span`);i(C,A),t(A,`label-text`),i(A,r(`传入 query`));let j=n(`div`);i(g,j),t(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=n(`label`);i(j,M),t(M,`form-control grid gap-2`);let N=n(`span`);i(M,N),t(N,`label-text font-medium`),i(N,r(`父组件 label`));let P=n(`input`);i(M,P),t(P,`input input-bordered`),p(()=>{l(P,E.value)}),h(P,`input`,e=>{E.value=e.target.value});let F=n(`label`);i(j,F),t(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=n(`input`);i(F,I),t(I,`checkbox checkbox-sm`),s(I,`type`,`checkbox`),p(()=>{c(I,!!O.value)}),h(I,`input`,e=>{O.value=!!e.target.checked});let L=n(`span`);i(F,L),t(L,`label-text`),i(L,r(`传入 label`));let R=n(`div`);i(g,R),t(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=n(`span`);i(R,z),t(z,`text-sm font-medium`),i(z,r(`父组件 count`));let B=n(`input`);i(R,B),t(B,`range range-primary`),s(B,`type`,`range`),s(B,`min`,`0`),s(B,`max`,`12`),s(B,`step`,`1`),p(()=>{l(B,String(f.value))}),h(B,`input`,e=>{f.value=Number(e.target.value)});let V=n(`div`);i(g,V),t(V,`grid gap-3 md:grid-cols-3`);let H=a(`rue:component:anchor`);i(V,H),p(()=>{let e=v(w,{label:`raw query`,value:D.value?u.value:void 0});_(()=>m(e,V,H))});let U=a(`rue:component:anchor`);i(V,U),p(()=>{let e=v(w,{label:`raw label`,value:O.value?E.value:void 0});_(()=>m(e,V,U))});let W=a(`rue:component:anchor`);i(V,W),p(()=>{let e=v(w,{label:`raw count`,value:f.value});_(()=>m(e,V,W))}),i(o,r(` `));let G=a(`rue:component:anchor`);i(o,G),p(()=>{let e=v(T,{query:D.value?u.value:void 0,count:f.value,label:O.value?E.value:void 0});_(()=>m(e,o,G))}),i(o,r(` `));let K=n(`div`);return i(o,K),t(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),i(K,r(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),i(o,r(` `)),o}):``;_(()=>m(d,N,P))}),i(N,r(` `));let F=a(`rue:slot:anchor`);return i(N,F),p(()=>{let r=o.value===`code`?y(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),p(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:C});_(()=>m(e,s,c))}),r}):``;_(()=>m(r,N,F))}),d})}),d,g),d})};export{E as default};