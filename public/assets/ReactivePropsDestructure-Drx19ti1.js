import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Q as o,U as s,W as c,Z as l,at as u,ht as d,it as f,l as p,lt as m,s as h,t as g,wt as _,yt as v,z as y}from"./vapor-runtime-C1rlwc61.js";import{a as b}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as x}from"./Code-BCLFq1E3.js";import{t as S}from"./SidebarPlaygroundExample-CdMvdgT7.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=r=>p(o=>{let s=c(`div`,o);e(s,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let l=c(`span`,s);t(s,l),e(l,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let d=i(`rue:slot:anchor`);t(l,d),n(()=>{let e=r.label;v(()=>h(e,l,d))});let f=c(`span`,s);t(s,f),e(f,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let p=a(f);return t(f,p),n(()=>{u(p,String(r.value))}),s}),T=a=>{let{summary:o,latest:s,shadow:l}=b(`useSetup:0:0`,()=>_(()=>{let e=b(`computed:1:0`,()=>m(()=>`${a.label===void 0?`fallback-label`:a.label}:${(a.query===void 0?`fallback-query`:a.query).trim().toUpperCase()} x ${a.count}`)),t=b(`ref:1:1`,()=>d(``)),r=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>n(()=>{t.value=`${a.query===void 0?`fallback-query`:a.query}|${a.count}|${a.label===void 0?`fallback-label`:a.label}|${r(a.query===void 0?`fallback-query`:a.query)}`})),{summary:e,latest:t,shadow:r}}));return p(u=>{let d=c(`section`,u);e(d,`card border border-success/25 bg-base-100 shadow-sm`);let f=c(`div`,d);t(d,f),e(f,`card-body gap-4`);let p=c(`div`,f);t(f,p),e(p,`space-y-1`);let m=c(`div`,p);t(p,m),e(m,`badge badge-success badge-outline`),t(m,r(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let _=c(`h2`,p);t(p,_),e(_,`text-lg font-semibold`),t(_,r(`编译器改写后的解构 props`));let y=c(`p`,p);t(p,y),e(y,`text-sm leading-6 text-base-content/72`),t(y,r(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=c(`div`,f);t(f,b),e(b,`grid gap-3 md:grid-cols-2`);let x=i(`rue:component:anchor`);t(b,x),n(()=>{let e=g(w,{label:`summary.get()`,value:o.get()});v(()=>h(e,b,x))});let S=i(`rue:component:anchor`);t(b,S),n(()=>{let e=g(w,{label:`watchEffect latest`,value:s.value});v(()=>h(e,b,S))});let C=i(`rue:component:anchor`);t(b,C),n(()=>{let e=g(w,{label:`shadow(query)`,value:l(a.query===void 0?`fallback-query`:a.query)});v(()=>h(e,b,C))});let T=i(`rue:component:anchor`);return t(b,T),n(()=>{let e=g(w,{label:`render text`,value:`${a.query===void 0?`fallback-query`:a.query} / ${a.count} / ${a.label===void 0?`fallback-label`:a.label}`});v(()=>h(e,b,T))}),d})},E=()=>{let{activeTab:a,query:u,count:m,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>_(()=>({activeTab:b(`ref:1:3`,()=>d(`preview`)),query:b(`ref:1:4`,()=>d(` transfer `)),count:b(`ref:1:5`,()=>d(2)),label:b(`ref:1:6`,()=>d(`runtime-label`)),passQuery:b(`ref:1:7`,()=>d(!0)),passLabel:b(`ref:1:8`,()=>d(!0))})));return p(d=>{let _=s(),b=i(`rue:component:anchor`);return t(_,b),h(g(S,{children:p(()=>{let d=s(),_=c(`div`,d);t(d,_),e(_,`space-y-4`);let b=c(`div`,_);t(_,b),e(b,`space-y-3`);let S=c(`h1`,b);t(b,S),e(S,`text-4xl font-semibold tracking-tight`),t(S,r(`Reactive Props Destructure`));let k=c(`p`,b);t(b,k),e(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),t(k,r(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=c(`div`,_);t(_,A),l(A,`role`,`tablist`),e(A,`tabs tabs-box`);let j=c(`button`,A);t(A,j),l(j,`role`,`tab`),n(()=>{e(j,String(`tab ${a.value===`preview`?`tab-active`:``}`))}),y(j,`click`,()=>{a.value=`preview`}),t(j,r(`效果`));let M=c(`button`,A);t(A,M),l(M,`role`,`tab`),n(()=>{e(M,String(`tab ${a.value===`code`?`tab-active`:``}`))}),y(M,`click`,()=>{a.value=`code`}),t(M,r(`代码`));let N=c(`div`,_);t(_,N),e(N,`mt-4 grid gap-6 items-start`);let P=i(`rue:slot:anchor`);t(N,P),n(()=>{let d=a.value===`preview`?p(()=>{let a=s();t(a,r(` `));let d=c(`section`,a);t(a,d),e(d,`card border border-base-300 bg-base-100 shadow-sm`);let p=c(`div`,d);t(d,p),e(p,`card-body gap-5`);let _=c(`div`,p);t(p,_),e(_,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=c(`label`,_);t(_,b),e(b,`form-control grid gap-2`);let x=c(`span`,b);t(b,x),e(x,`label-text font-medium`),t(x,r(`父组件 query`));let S=c(`input`,b);t(b,S),e(S,`input input-bordered`),n(()=>{f(S,u.value)}),y(S,`input`,e=>{u.value=e.target.value});let C=c(`label`,_);t(_,C),e(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=c(`input`,C);t(C,k),e(k,`checkbox checkbox-sm`),l(k,`type`,`checkbox`),n(()=>{o(k,!!D.value)}),y(k,`input`,e=>{D.value=!!e.target.checked});let A=c(`span`,C);t(C,A),e(A,`label-text`),t(A,r(`传入 query`));let j=c(`div`,p);t(p,j),e(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=c(`label`,j);t(j,M),e(M,`form-control grid gap-2`);let N=c(`span`,M);t(M,N),e(N,`label-text font-medium`),t(N,r(`父组件 label`));let P=c(`input`,M);t(M,P),e(P,`input input-bordered`),n(()=>{f(P,E.value)}),y(P,`input`,e=>{E.value=e.target.value});let F=c(`label`,j);t(j,F),e(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=c(`input`,F);t(F,I),e(I,`checkbox checkbox-sm`),l(I,`type`,`checkbox`),n(()=>{o(I,!!O.value)}),y(I,`input`,e=>{O.value=!!e.target.checked});let L=c(`span`,F);t(F,L),e(L,`label-text`),t(L,r(`传入 label`));let R=c(`div`,p);t(p,R),e(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=c(`span`,R);t(R,z),e(z,`text-sm font-medium`),t(z,r(`父组件 count`));let B=c(`input`,R);t(R,B),e(B,`range range-primary`),l(B,`type`,`range`),l(B,`min`,`0`),l(B,`max`,`12`),l(B,`step`,`1`),n(()=>{f(B,String(m.value))}),y(B,`input`,e=>{m.value=Number(e.target.value)});let V=c(`div`,p);t(p,V),e(V,`grid gap-3 md:grid-cols-3`);let H=i(`rue:component:anchor`);t(V,H),n(()=>{let e=g(w,{label:`raw query`,value:D.value?u.value:void 0});v(()=>h(e,V,H))});let U=i(`rue:component:anchor`);t(V,U),n(()=>{let e=g(w,{label:`raw label`,value:O.value?E.value:void 0});v(()=>h(e,V,U))});let W=i(`rue:component:anchor`);t(V,W),n(()=>{let e=g(w,{label:`raw count`,value:m.value});v(()=>h(e,V,W))}),t(a,r(` `));let G=i(`rue:component:anchor`);t(a,G),n(()=>{let e=g(T,{query:D.value?u.value:void 0,count:m.value,label:O.value?E.value:void 0});v(()=>h(e,a,G))}),t(a,r(` `));let K=c(`div`,a);return t(a,K),e(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),t(K,r(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),t(a,r(` `)),a}):``;v(()=>h(d,N,P))}),t(N,r(` `));let F=i(`rue:slot:anchor`);return t(N,F),n(()=>{let r=a.value===`code`?p(()=>{let r=s(),a=c(`div`,r);t(r,a),e(a,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let o=c(`div`,a);t(a,o),e(o,`card-body p-0`);let l=i(`rue:component:anchor`);return t(o,l),n(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});v(()=>h(e,o,l))}),r}):``;v(()=>h(r,N,F))}),d})}),_,b),_})};export{E as default};