import{An as e,Bt as t,Dn as n,Et as r,H as i,K as a,L as o,Lt as s,Mt as c,Sn as l,V as u,W as d,_n as f,bn as p,fn as m,ft as h,gn as g,hn as _,mn as v,nt as y,ot as b,q as x,wn as S,x as C,z as w}from"./rue-runtime-CwEGJ854.js";import{t as T}from"./Code-B3jCYMAr.js";import{r as E}from"./SidebarPlaygroundExample-EGR0CyDT.js";var D=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,O=f(`<div class="grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5"><span class="text-xs uppercase tracking-[0.18em] text-base-content/45"><!--rue:text-hole:0--></span><span class="rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm"><!--rue:text-hole:1--></span></div>`),k=f(`<section class="card border border-success/25 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="space-y-1"><div class="badge badge-success badge-outline">/* RUE_REACTIVE_PROPS_DESTRUCTURED */</div><h2 class="text-lg font-semibold">编译器改写后的解构 props</h2><p class="text-sm leading-6 text-base-content/72">这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。</p></div><div class="grid gap-3 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></section>`),A=f(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Reactive Props Destructure</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),j=e=>{let t=d(e.label),n=d(e.value);return x(r(Object.assign(e=>{let r=O().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode,c=g(``);a.insertBefore(c,i),a.removeChild(i),p(c,()=>t.get());let l=g(``);return s.insertBefore(l,o),s.removeChild(o),p(l,()=>String(n.get())),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.label),n.set(e.value)}),()=>e)},M=n=>{let i=d(n.count),o=d(n.label),s=d(n.query),u=l(()=>`${o.get()===void 0?`fallback-label`:o.get()}:${(s.get()===void 0?`fallback-query`:s.get()).trim().toUpperCase()} x ${i.get()}`),f=t(``),p=e=>e.toLowerCase();return e(()=>{f.value=`${s.get()===void 0?`fallback-query`:s.get()}|${i.get()}|${o.get()===void 0?`fallback-label`:o.get()}|${p(s.get()===void 0?`fallback-query`:s.get())}`}),c(()=>x(r(Object.assign(e=>{let t=k().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,c=t.childNodes[0].childNodes[1].childNodes[1],l=c.parentNode,d=t.childNodes[0].childNodes[1].childNodes[2],m=d.parentNode,h=t.childNodes[0].childNodes[1].childNodes[3],g=h.parentNode,_=v(r);a(_,j,()=>({label:`summary.get()`,value:u.get()})),r.insertBefore(_,n);let y=v(l);a(y,j,()=>({label:`watchEffect latest`,value:f.value})),l.insertBefore(y,c);let b=v(m);a(b,j,()=>({label:`shadow(query)`,value:p(s.get()===void 0?`fallback-query`:s.get())})),m.insertBefore(b,d);let x=v(g);return a(x,j,()=>({label:`render text`,value:`${s.get()===void 0?`fallback-query`:s.get()} / ${i.get()} / ${o.get()===void 0?`fallback-label`:o.get()}`})),g.insertBefore(x,h),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{i.set(e.count),o.set(e.label),s.set(e.query)}),()=>n))},N=()=>{let e=t(`preview`),l=t(` transfer `),d=t(2),f=t(`runtime-label`),p=t(!0),v=t(!0);return c(()=>x(i(E,()=>({children:(t,i,c)=>C(t,c,()=>r(Object.assign(t=>{let i=y(),c=A().content.cloneNode(!0),x=c.firstChild,C=x.childNodes[1].childNodes[0],w=x.childNodes[1].childNodes[1],E=x.childNodes[2].childNodes[0],O=E.parentNode,k=x.childNodes[2].childNodes[1],N=k.parentNode;i.appendChild(c),b(C,`role`,`tab`),S(()=>{o(C,`tab ${e.value===`preview`?`tab-active`:``}`)});let P=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};C.addEventListener(`click`,P),s(()=>C.removeEventListener(`click`,P)),b(w,`role`,`tab`),S(()=>{o(w,`tab ${e.value===`code`?`tab-active`:``}`)});let F=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return w.addEventListener(`click`,F),s(()=>w.removeEventListener(`click`,F)),u(O,E,()=>{let t=e.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=y(),r=_(`section`,t);m(t,r),r.className=`card border border-base-300 bg-base-100 shadow-sm`;let i=_(`div`,r);m(r,i),i.className=`card-body gap-5`;let o=_(`div`,i);m(i,o),o.className=`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`;let s=_(`label`,o);m(o,s),s.className=`form-control grid gap-2`;let c=_(`span`,s);m(s,c),c.className=`label-text font-medium`,m(c,g(`父组件 query`));let u=_(`input`,s);m(s,u),u.className=`input input-bordered`;let b;S(()=>{let e=l.value,t=e==null?``:String(e);Object.is(b,t)||(b=t,h(u,t))});let x=e=>{let t=e=>{l.value=e.target.value};typeof t==`function`&&t(e)};u.addEventListener(`input`,x),n(()=>u.removeEventListener(`input`,x));let C=_(`label`,o);m(o,C),C.className=`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`;let w=_(`input`,C);m(C,w),w.className=`checkbox checkbox-sm`,w.setAttribute(`type`,`checkbox`);let T;S(()=>{let e=!!p.value;Object.is(T,e)||(T=e,w.checked=e)});let E=e=>{let t=e=>{p.value=!!e.target.checked};typeof t==`function`&&t(e)};w.addEventListener(`input`,E),n(()=>w.removeEventListener(`input`,E));let D=_(`span`,C);m(C,D),D.className=`label-text`,m(D,g(`传入 query`));let O=_(`div`,i);m(i,O),O.className=`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`;let k=_(`label`,O);m(O,k),k.className=`form-control grid gap-2`;let A=_(`span`,k);m(k,A),A.className=`label-text font-medium`,m(A,g(`父组件 label`));let N=_(`input`,k);m(k,N),N.className=`input input-bordered`;let P;S(()=>{let e=f.value,t=e==null?``:String(e);Object.is(P,t)||(P=t,h(N,t))});let F=e=>{let t=e=>{f.value=e.target.value};typeof t==`function`&&t(e)};N.addEventListener(`input`,F),n(()=>N.removeEventListener(`input`,F));let I=_(`label`,O);m(O,I),I.className=`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`;let L=_(`input`,I);m(I,L),L.className=`checkbox checkbox-sm`,L.setAttribute(`type`,`checkbox`);let R;S(()=>{let e=!!v.value;Object.is(R,e)||(R=e,L.checked=e)});let z=e=>{let t=e=>{v.value=!!e.target.checked};typeof t==`function`&&t(e)};L.addEventListener(`input`,z),n(()=>L.removeEventListener(`input`,z));let B=_(`span`,I);m(I,B),B.className=`label-text`,m(B,g(`传入 label`));let V=_(`div`,i);m(i,V),V.className=`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`;let H=_(`span`,V);m(V,H),H.className=`text-sm font-medium`,m(H,g(`父组件 count`));let U=_(`input`,V);m(V,U),U.className=`range range-primary`,U.setAttribute(`type`,`range`),U.setAttribute(`min`,`0`),U.setAttribute(`max`,`12`),U.setAttribute(`step`,`1`);let W;S(()=>{let e=String(d.value),t=e==null?``:String(e);Object.is(W,t)||(W=t,h(U,t))});let G=e=>{let t=e=>{d.value=Number(e.target.value)};typeof t==`function`&&t(e)};U.addEventListener(`input`,G),n(()=>U.removeEventListener(`input`,G));let K=_(`div`,i);m(i,K),K.className=`grid gap-3 md:grid-cols-3`,a(K,j,()=>({label:`raw query`,value:p.value?l.value:void 0})),a(K,j,()=>({label:`raw label`,value:v.value?f.value:void 0})),a(K,j,()=>({label:`raw count`,value:d.value})),a(t,M,()=>({query:p.value?l.value:void 0,count:d.value,label:v.value?f.value:void 0}));let q=_(`div`,t);return m(t,q),q.className=`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`,m(q,g(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>r(Object.assign(e=>{let n=g(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),u(N,k,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=_(`div`,e);t.className=`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`;let n=_(`div`,t);return m(t,n),n.className=`card-body p-0`,a(n,T,()=>({className:`h-full`,lang:`tsx`,code:D})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>r(Object.assign(e=>{let n=g(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),e=>w(()=>{})))};export{N as default};