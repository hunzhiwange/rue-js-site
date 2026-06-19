import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,ct as s,et as c,ht as l,l as u,lt as d,mt as f,nt as p,o as m,st as h,t as g,tt as _,vt as v,zt as y}from"./vapor-runtime-CXIalONM.js";import{a as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as x}from"./Code-BIscIyEp.js";import{r as S}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,w=e=>u(a=>{let o=c(`div`,a);d(o,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let s=c(`span`,o);i(o,s),d(s,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let u=t(`rue:slot:anchor`);i(s,u),n(()=>{let t=e.label;r(()=>m(t,s,u))});let f=c(`span`,o);i(o,f),d(f,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let h=p(f);return i(f,h),n(()=>{l(h,String(e.value))}),o}),T=e=>{let{summary:a,latest:s,shadow:l}=b(`useSetup:0:0`,()=>o(()=>{let t=b(`computed:1:0`,()=>v(()=>`${e.label===void 0?`fallback-label`:e.label}:${(e.query===void 0?`fallback-query`:e.query).trim().toUpperCase()} x ${e.count}`)),r=b(`ref:1:1`,()=>y(``)),i=e=>e.toLowerCase();return b(`watchEffect:1:2`,()=>n(()=>{r.value=`${e.query===void 0?`fallback-query`:e.query}|${e.count}|${e.label===void 0?`fallback-label`:e.label}|${i(e.query===void 0?`fallback-query`:e.query)}`})),{summary:t,latest:r,shadow:i}}));return u(o=>{let u=c(`section`,o);d(u,`card border border-success/25 bg-base-100 shadow-sm`);let f=c(`div`,u);i(u,f),d(f,`card-body gap-4`);let p=c(`div`,f);i(f,p),d(p,`space-y-1`);let h=c(`div`,p);i(p,h),d(h,`badge badge-success badge-outline`),i(h,_(`/* RUE_REACTIVE_PROPS_DESTRUCTURED */`));let v=c(`h2`,p);i(p,v),d(v,`text-lg font-semibold`),i(v,_(`编译器改写后的解构 props`));let y=c(`p`,p);i(p,y),d(y,`text-sm leading-6 text-base-content/72`),i(y,_(`这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。`));let b=c(`div`,f);i(f,b),d(b,`grid gap-3 md:grid-cols-2`);let x=t(`rue:component:anchor`);i(b,x),n(()=>{let e=g(w,{label:`summary.get()`,value:a.get()});r(()=>m(e,b,x))});let S=t(`rue:component:anchor`);i(b,S),n(()=>{let e=g(w,{label:`watchEffect latest`,value:s.value});r(()=>m(e,b,S))});let C=t(`rue:component:anchor`);i(b,C),n(()=>{let t=g(w,{label:`shadow(query)`,value:l(e.query===void 0?`fallback-query`:e.query)});r(()=>m(t,b,C))});let T=t(`rue:component:anchor`);return i(b,T),n(()=>{let t=g(w,{label:`render text`,value:`${e.query===void 0?`fallback-query`:e.query} / ${e.count} / ${e.label===void 0?`fallback-label`:e.label}`});r(()=>m(t,b,T))}),u})},E=()=>{let{activeTab:l,query:p,count:v,label:E,passQuery:D,passLabel:O}=b(`useSetup:0:0:dup1`,()=>o(()=>({activeTab:b(`ref:1:3`,()=>y(`preview`)),query:b(`ref:1:4`,()=>y(` transfer `)),count:b(`ref:1:5`,()=>y(2)),label:b(`ref:1:6`,()=>y(`runtime-label`)),passQuery:b(`ref:1:7`,()=>y(!0)),passLabel:b(`ref:1:8`,()=>y(!0))})));return u(o=>{let y=e(),b=t(`rue:component:anchor`);return i(y,b),m(g(S,{children:u(()=>{let o=e(),y=c(`div`,o);i(o,y),d(y,`space-y-4`);let b=c(`div`,y);i(y,b),d(b,`space-y-3`);let S=c(`h1`,b);i(b,S),d(S,`text-4xl font-semibold tracking-tight`),i(S,_(`Reactive Props Destructure`));let k=c(`p`,b);i(b,k),d(k,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),i(k,_(`这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。`));let A=c(`div`,y);i(y,A),h(A,`role`,`tablist`),d(A,`tabs tabs-box`);let j=c(`button`,A);i(A,j),h(j,`role`,`tab`),n(()=>{d(j,`tab ${l.value===`preview`?`tab-active`:``}`)}),a(j,`click`,()=>{l.value=`preview`}),i(j,_(`效果`));let M=c(`button`,A);i(A,M),h(M,`role`,`tab`),n(()=>{d(M,`tab ${l.value===`code`?`tab-active`:``}`)}),a(M,`click`,()=>{l.value=`code`}),i(M,_(`代码`));let N=c(`div`,y);i(y,N),d(N,`mt-4 grid gap-6 items-start`);let P=t(`rue:slot:anchor`);i(N,P),n(()=>{let o=l.value===`preview`?u(()=>{let o=e();i(o,_(` `));let l=c(`section`,o);i(o,l),d(l,`card border border-base-300 bg-base-100 shadow-sm`);let u=c(`div`,l);i(l,u),d(u,`card-body gap-5`);let y=c(`div`,u);i(u,y),d(y,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=c(`label`,y);i(y,b),d(b,`form-control grid gap-2`);let x=c(`span`,b);i(b,x),d(x,`label-text font-medium`),i(x,_(`父组件 query`));let S=c(`input`,b);i(b,S),d(S,`input input-bordered`),n(()=>{f(S,p.value)}),a(S,`input`,e=>{p.value=e.target.value});let C=c(`label`,y);i(y,C),d(C,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let k=c(`input`,C);i(C,k),d(k,`checkbox checkbox-sm`),h(k,`type`,`checkbox`),n(()=>{s(k,!!D.value)}),a(k,`input`,e=>{D.value=!!e.target.checked});let A=c(`span`,C);i(C,A),d(A,`label-text`),i(A,_(`传入 query`));let j=c(`div`,u);i(u,j),d(j,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let M=c(`label`,j);i(j,M),d(M,`form-control grid gap-2`);let N=c(`span`,M);i(M,N),d(N,`label-text font-medium`),i(N,_(`父组件 label`));let P=c(`input`,M);i(M,P),d(P,`input input-bordered`),n(()=>{f(P,E.value)}),a(P,`input`,e=>{E.value=e.target.value});let F=c(`label`,j);i(j,F),d(F,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=c(`input`,F);i(F,I),d(I,`checkbox checkbox-sm`),h(I,`type`,`checkbox`),n(()=>{s(I,!!O.value)}),a(I,`input`,e=>{O.value=!!e.target.checked});let L=c(`span`,F);i(F,L),d(L,`label-text`),i(L,_(`传入 label`));let R=c(`div`,u);i(u,R),d(R,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let z=c(`span`,R);i(R,z),d(z,`text-sm font-medium`),i(z,_(`父组件 count`));let B=c(`input`,R);i(R,B),d(B,`range range-primary`),h(B,`type`,`range`),h(B,`min`,`0`),h(B,`max`,`12`),h(B,`step`,`1`),n(()=>{f(B,String(v.value))}),a(B,`input`,e=>{v.value=Number(e.target.value)});let V=c(`div`,u);i(u,V),d(V,`grid gap-3 md:grid-cols-3`);let H=t(`rue:component:anchor`);i(V,H),n(()=>{let e=g(w,{label:`raw query`,value:D.value?p.value:void 0});r(()=>m(e,V,H))});let U=t(`rue:component:anchor`);i(V,U),n(()=>{let e=g(w,{label:`raw label`,value:O.value?E.value:void 0});r(()=>m(e,V,U))});let W=t(`rue:component:anchor`);i(V,W),n(()=>{let e=g(w,{label:`raw count`,value:v.value});r(()=>m(e,V,W))}),i(o,_(` `));let G=t(`rue:component:anchor`);i(o,G),n(()=>{let e=g(T,{query:D.value?p.value:void 0,count:v.value,label:O.value?E.value:void 0});r(()=>m(e,o,G))}),i(o,_(` `));let K=c(`div`,o);return i(o,K),d(K,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),i(K,_(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),i(o,_(` `)),o}):``;r(()=>m(o,N,P))}),i(N,_(` `));let F=t(`rue:slot:anchor`);return i(N,F),n(()=>{let a=l.value===`code`?u(()=>{let a=e(),o=c(`div`,a);i(a,o),d(o,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let s=c(`div`,o);i(o,s),d(s,`card-body p-0`);let l=t(`rue:component:anchor`);return i(s,l),n(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});r(()=>m(e,s,l))}),a}):``;r(()=>m(a,N,F))}),o})}),y,b),y})};export{E as default};