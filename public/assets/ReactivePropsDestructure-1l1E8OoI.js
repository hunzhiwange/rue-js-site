import{An as e,Dn as t,Dt as n,E as r,P as i,Q as a,Qt as o,Vt as s,_n as c,_t as l,at as u,ct as d,et as f,gn as p,hn as m,nt as h,pn as g,qt as _,rt as v,st as y,tn as b,vn as x,wn as S,xn as C,xt as w}from"./rue-runtime-HIMg8Lz8.js";import{t as T}from"./Code-DpH7u0gk.js";import{r as E}from"./SidebarPlaygroundExample-BCPRe0hA.js";var D=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,O=x(`<div class="grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5"><span class="text-xs uppercase tracking-[0.18em] text-base-content/45"><!--rue:text-hole:0--></span><span class="rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm"><!--rue:text-hole:1--></span></div>`),k=x(`<section class="card border border-success/25 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="space-y-1"><div class="badge badge-success badge-outline">/* RUE_REACTIVE_PROPS_DESTRUCTURED */</div><h2 class="text-lg font-semibold">编译器改写后的解构 props</h2><p class="text-sm leading-6 text-base-content/72">这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。</p></div><div class="grid gap-3 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></section>`),A=x(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Reactive Props Destructure</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),j=e=>{let t=u(e.label),n=u(e.value);return d(s(Object.assign(e=>{let r=O().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode,l=c(``);a.insertBefore(l,i),a.removeChild(i),C(l,()=>t.get());let u=c(``);return s.insertBefore(u,o),s.removeChild(o),C(u,()=>String(n.get())),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{t.set(e.label),n.set(e.value)}),()=>e)},M=t=>{let n=u(t.count),r=u(t.label),a=u(t.query),o=i(()=>`${r.get()===void 0?`fallback-label`:r.get()}:${(a.get()===void 0?`fallback-query`:a.get()).trim().toUpperCase()} x ${n.get()}`),c=b(``),l=e=>e.toLowerCase();return e(()=>{c.value=`${a.get()===void 0?`fallback-query`:a.get()}|${n.get()}|${r.get()===void 0?`fallback-label`:r.get()}|${l(a.get()===void 0?`fallback-query`:a.get())}`}),_(()=>d(s(Object.assign(e=>{let t=k().content.cloneNode(!0).firstChild,i=t.childNodes[0].childNodes[1].childNodes[0],s=i.parentNode,u=t.childNodes[0].childNodes[1].childNodes[1],d=u.parentNode,f=t.childNodes[0].childNodes[1].childNodes[2],p=f.parentNode,h=t.childNodes[0].childNodes[1].childNodes[3],g=h.parentNode,_=m(s);y(_,j,()=>({label:`summary.get()`,value:o.get()})),s.insertBefore(_,i);let v=m(d);y(v,j,()=>({label:`watchEffect latest`,value:c.value})),d.insertBefore(v,u);let b=m(p);y(b,j,()=>({label:`shadow(query)`,value:l(a.get()===void 0?`fallback-query`:a.get())})),p.insertBefore(b,f);let x=m(g);return y(x,j,()=>({label:`render text`,value:`${a.get()===void 0?`fallback-query`:a.get()} / ${n.get()} / ${r.get()===void 0?`fallback-label`:r.get()}`})),g.insertBefore(x,h),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{n.set(e.count),r.set(e.label),a.set(e.query)}),()=>t))},N=()=>{let e=b(`preview`),i=b(` transfer `),u=b(2),m=b(`runtime-label`),x=b(!0),C=b(!0);return _(()=>d(v(E,()=>({children:(d,f,_)=>r(d,_,()=>s(Object.assign(r=>{let d=l(),f=A().content.cloneNode(!0),_=f.firstChild,v=_.childNodes[1].childNodes[0],b=_.childNodes[1].childNodes[1],E=_.childNodes[2].childNodes[0],O=E.parentNode,k=_.childNodes[2].childNodes[1],N=k.parentNode;d.appendChild(f),w(v,`role`,`tab`),S(()=>{a(v,`tab ${e.value===`preview`?`tab-active`:``}`)});let P=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};v.addEventListener(`click`,P),o(()=>v.removeEventListener(`click`,P)),w(b,`role`,`tab`),S(()=>{a(b,`tab ${e.value===`code`?`tab-active`:``}`)});let F=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return b.addEventListener(`click`,F),o(()=>b.removeEventListener(`click`,F)),h(O,E,()=>{let r=e.value===`preview`;return r?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let r=l(),a=p(`section`,r);g(r,a),a.className=`card border border-base-300 bg-base-100 shadow-sm`;let o=p(`div`,a);g(a,o),o.className=`card-body gap-5`;let s=p(`div`,o);g(o,s),s.className=`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`;let d=p(`label`,s);g(s,d),d.className=`form-control grid gap-2`;let f=p(`span`,d);g(d,f),f.className=`label-text font-medium`,g(f,c(`父组件 query`));let h=p(`input`,d);g(d,h),h.className=`input input-bordered`;let _;S(()=>{let e=i.value,t=e==null?``:String(e);Object.is(_,t)||(_=t,n(h,t))});let v=e=>{let t=e=>{i.value=e.target.value};typeof t==`function`&&t(e)};h.addEventListener(`input`,v),t(()=>h.removeEventListener(`input`,v));let b=p(`label`,s);g(s,b),b.className=`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`;let w=p(`input`,b);g(b,w),w.className=`checkbox checkbox-sm`,w.setAttribute(`type`,`checkbox`);let T;S(()=>{let e=!!x.value;Object.is(T,e)||(T=e,w.checked=e)});let E=e=>{let t=e=>{x.value=!!e.target.checked};typeof t==`function`&&t(e)};w.addEventListener(`input`,E),t(()=>w.removeEventListener(`input`,E));let D=p(`span`,b);g(b,D),D.className=`label-text`,g(D,c(`传入 query`));let O=p(`div`,o);g(o,O),O.className=`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`;let k=p(`label`,O);g(O,k),k.className=`form-control grid gap-2`;let A=p(`span`,k);g(k,A),A.className=`label-text font-medium`,g(A,c(`父组件 label`));let N=p(`input`,k);g(k,N),N.className=`input input-bordered`;let P;S(()=>{let e=m.value,t=e==null?``:String(e);Object.is(P,t)||(P=t,n(N,t))});let F=e=>{let t=e=>{m.value=e.target.value};typeof t==`function`&&t(e)};N.addEventListener(`input`,F),t(()=>N.removeEventListener(`input`,F));let I=p(`label`,O);g(O,I),I.className=`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`;let L=p(`input`,I);g(I,L),L.className=`checkbox checkbox-sm`,L.setAttribute(`type`,`checkbox`);let R;S(()=>{let e=!!C.value;Object.is(R,e)||(R=e,L.checked=e)});let z=e=>{let t=e=>{C.value=!!e.target.checked};typeof t==`function`&&t(e)};L.addEventListener(`input`,z),t(()=>L.removeEventListener(`input`,z));let B=p(`span`,I);g(I,B),B.className=`label-text`,g(B,c(`传入 label`));let V=p(`div`,o);g(o,V),V.className=`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`;let H=p(`span`,V);g(V,H),H.className=`text-sm font-medium`,g(H,c(`父组件 count`));let U=p(`input`,V);g(V,U),U.className=`range range-primary`,U.setAttribute(`type`,`range`),U.setAttribute(`min`,`0`),U.setAttribute(`max`,`12`),U.setAttribute(`step`,`1`);let W;S(()=>{let e=String(u.value),t=e==null?``:String(e);Object.is(W,t)||(W=t,n(U,t))});let G=e=>{let t=e=>{u.value=Number(e.target.value)};typeof t==`function`&&t(e)};U.addEventListener(`input`,G),t(()=>U.removeEventListener(`input`,G));let K=p(`div`,o);g(o,K),K.className=`grid gap-3 md:grid-cols-3`,y(K,j,()=>({label:`raw query`,value:x.value?i.value:void 0})),y(K,j,()=>({label:`raw label`,value:C.value?m.value:void 0})),y(K,j,()=>({label:`raw count`,value:u.value})),y(r,M,()=>({query:x.value?i.value:void 0,count:u.value,label:C.value?m.value:void 0}));let q=p(`div`,r);return g(r,q),q.className=`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`,g(q,c(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:typeof r==`number`||typeof r==`bigint`?{__rue_compiled_branch_key:r,create:()=>s(Object.assign(e=>{let t=c(typeof r==`string`||typeof r==`number`||typeof r==`bigint`?r:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),h(N,k,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=p(`div`,e);t.className=`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`;let n=p(`div`,t);return g(t,n),n.className=`card-body p-0`,y(n,T,()=>({className:`h-full`,lang:`tsx`,code:D})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>s(Object.assign(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:d,__rue_compiled_roots:[d]}},{__rue_compiled_explicit_roots:!0})))})),e=>f(()=>{})))};export{N as default};