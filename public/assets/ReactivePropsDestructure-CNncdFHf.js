import{B as e,Bt as t,F as n,I as r,P as i,Ut as a,V as o,Vt as s,W as c,Wt as l,ct as u,en as d,fn as f,gn as p,hn as m,in as h,mn as g,mt as _,nt as v,pn as y,sn as b,u as x,yn as S,yt as C,z as w,zt as T}from"./rue-runtime-BWbIfNT8.js";import{t as E}from"./Code-C5ZhIIr9.js";import{r as D}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var O=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,k=S(`<section class="card border border-success/25 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="space-y-1"><div class="badge badge-success badge-outline">/* RUE_REACTIVE_PROPS_DESTRUCTURED */</div><h2 class="text-lg font-semibold">编译器改写后的解构 props</h2><p class="text-sm leading-6 text-base-content/72">这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。</p></div><div class="grid gap-3 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></section>`),A=S(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Reactive Props Destructure</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),j=(n,i,a)=>{let o=c(w(n,`label`)),s=c(w(n,`value`));return r(l(e=>{let n=m(`div`,e);n.setAttribute(`class`,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let r=m(`span`,n);f(n,r),r.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let i=y(`rue:compiled-slot`);f(r,i),t({parent:r,before:i},()=>T(o.get()),()=>({}));let a=m(`span`,n);f(n,a),a.setAttribute(`class`,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let c=y(`rue:compiled-slot`);return f(a,c),t({parent:a,before:c},()=>T(s.get()),()=>({})),[n,n]}),e=>d(()=>{o.set(e.label),s.set(e.value)}),()=>e(n))},M=(n,a,o)=>{let f=c(w(n,`count`)),p=c(w(n,`label`)),m=c(w(n,`query`)),h=u(()=>`${p.get()===void 0?`fallback-label`:p.get()}:${(m.get()===void 0?`fallback-query`:m.get()).trim().toUpperCase()} x ${f.get()}`),g=_(``),y=e=>e.toLowerCase();return C(()=>{g.value=`${m.get()===void 0?`fallback-query`:m.get()}|${f.get()}|${p.get()===void 0?`fallback-label`:p.get()}|${y(m.get()===void 0?`fallback-query`:m.get())}`}),v(()=>r(l(e=>{let n=k().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[0],a=r.parentNode,o=n.childNodes[0].childNodes[1].childNodes[1],c=o.parentNode,l=n.childNodes[0].childNodes[1].childNodes[2],u=l.parentNode,d=n.childNodes[0].childNodes[1].childNodes[3],_=d.parentNode,v=(e,t,n)=>{let r=()=>i(j,()=>({label:`summary.get()`,value:h.get()}));return e==null?r():s(e,n,r)},b=r.nextSibling;a.removeChild(r),t({parent:a,before:b},()=>v,()=>({}));let x=(e,t,n)=>{let r=()=>i(j,()=>({label:`watchEffect latest`,value:g.value}));return e==null?r():s(e,n,r)},S=o.nextSibling;c.removeChild(o),t({parent:c,before:S},()=>x,()=>({}));let C=(e,t,n)=>{let r=()=>i(j,()=>({label:`shadow(query)`,value:y(m.get()===void 0?`fallback-query`:m.get())}));return e==null?r():s(e,n,r)},w=l.nextSibling;u.removeChild(l),t({parent:u,before:w},()=>C,()=>({}));let T=(e,t,n)=>{let r=()=>i(j,()=>({label:`render text`,value:`${m.get()===void 0?`fallback-query`:m.get()} / ${f.get()} / ${p.get()===void 0?`fallback-label`:p.get()}`}));return e==null?r():s(e,n,r)},E=d.nextSibling;return _.removeChild(d),t({parent:_,before:E},()=>T,()=>({})),[n,n]}),e=>d(()=>{f.set(e.count),p.set(e.label),m.set(e.query)}),()=>e(n)))},N=(e,t,r)=>{let c=_(`preview`),u=_(` transfer `),d=_(2),y=_(`runtime-label`),S=_(!0),C=_(!0);return v(()=>i(D,()=>({children:(e,t,r)=>{let i=()=>l(e=>{let t=g(),r=A().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[1].childNodes[0],_=i.childNodes[1].childNodes[1],v=i.childNodes[2].childNodes[0],w=v.parentNode,T=i.childNodes[2].childNodes[1],D=T.parentNode;t.appendChild(r),s.setAttribute(`role`,`tab`);let k;h(()=>{let e=`tab ${c.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,s.setAttribute(`class`,t))}),b(x(e,s,`click`,()=>()=>{c.value=`preview`})),_.setAttribute(`role`,`tab`);let N;h(()=>{let e=`tab ${c.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,_.setAttribute(`class`,t))}),b(x(e,_,`click`,()=>()=>{c.value=`code`})),a(w,v,()=>{let e=c.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=g(),r=m(`section`,t);f(t,r),r.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let i=m(`div`,r);f(r,i),i.setAttribute(`class`,`card-body gap-5`);let a=m(`div`,i);f(i,a),a.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let o=m(`label`,a);f(a,o),o.setAttribute(`class`,`form-control grid gap-2`);let s=m(`span`,o);f(o,s),s.setAttribute(`class`,`label-text font-medium`),f(s,p(`父组件 query`));let c=m(`input`,o);f(o,c),c.setAttribute(`class`,`input input-bordered`);let l;h(()=>{let e=u.value,t=e==null?``:String(e);Object.is(l,t)||(l=t,c.value=t)});let _=e=>{let t=e=>{u.value=e.target.value};typeof t==`function`&&t(e)};c.addEventListener(`input`,_),b(()=>c.removeEventListener(`input`,_));let v=m(`label`,a);f(a,v),v.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let x=m(`input`,v);f(v,x),x.setAttribute(`class`,`checkbox checkbox-sm`),x.setAttribute(`type`,`checkbox`);let w;h(()=>{let e=!!S.value;Object.is(w,e)||(w=e,x.checked=e)});let T=e=>{let t=e=>{S.value=!!e.target.checked};typeof t==`function`&&t(e)};x.addEventListener(`input`,T),b(()=>x.removeEventListener(`input`,T));let E=m(`span`,v);f(v,E),E.setAttribute(`class`,`label-text`),f(E,p(`传入 query`));let D=m(`div`,i);f(i,D),D.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let O=m(`label`,D);f(D,O),O.setAttribute(`class`,`form-control grid gap-2`);let k=m(`span`,O);f(O,k),k.setAttribute(`class`,`label-text font-medium`),f(k,p(`父组件 label`));let A=m(`input`,O);f(O,A),A.setAttribute(`class`,`input input-bordered`);let N;h(()=>{let e=y.value,t=e==null?``:String(e);Object.is(N,t)||(N=t,A.value=t)});let P=e=>{let t=e=>{y.value=e.target.value};typeof t==`function`&&t(e)};A.addEventListener(`input`,P),b(()=>A.removeEventListener(`input`,P));let F=m(`label`,D);f(D,F),F.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=m(`input`,F);f(F,I),I.setAttribute(`class`,`checkbox checkbox-sm`),I.setAttribute(`type`,`checkbox`);let L;h(()=>{let e=!!C.value;Object.is(L,e)||(L=e,I.checked=e)});let R=e=>{let t=e=>{C.value=!!e.target.checked};typeof t==`function`&&t(e)};I.addEventListener(`input`,R),b(()=>I.removeEventListener(`input`,R));let z=m(`span`,F);f(F,z),z.setAttribute(`class`,`label-text`),f(z,p(`传入 label`));let B=m(`div`,i);f(i,B),B.setAttribute(`class`,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let V=m(`span`,B);f(B,V),V.setAttribute(`class`,`text-sm font-medium`),f(V,p(`父组件 count`));let H=m(`input`,B);f(B,H),H.setAttribute(`class`,`range range-primary`),H.setAttribute(`type`,`range`),H.setAttribute(`min`,`0`),H.setAttribute(`max`,`12`),H.setAttribute(`step`,`1`);let U;h(()=>{let e=String(d.value),t=e==null?``:String(e);Object.is(U,t)||(U=t,H.value=t)});let W=e=>{let t=e=>{d.value=Number(e.target.value)};typeof t==`function`&&t(e)};H.addEventListener(`input`,W),b(()=>H.removeEventListener(`input`,W));let G=m(`div`,i);f(i,G),G.setAttribute(`class`,`grid gap-3 md:grid-cols-3`),n(G,j,()=>({label:`raw query`,value:S.value?u.value:void 0})),n(G,j,()=>({label:`raw label`,value:C.value?y.value:void 0})),n(G,j,()=>({label:`raw count`,value:d.value})),n(t,M,()=>({query:S.value?u.value:void 0,count:d.value,label:C.value?y.value:void 0}));let K=m(`div`,t);f(t,K),K.setAttribute(`class`,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),f(K,p(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`));let q=p(``),J=p(``);return t.insertBefore(q,t.firstChild),t.appendChild(J),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=g();return[t.firstChild,t.lastChild]})}}),a(D,T,()=>{let e=c.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=m(`div`,e);t.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let r=m(`div`,t);return f(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,E,()=>({className:`h-full`,lang:`tsx`,code:O})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=g();return[t.firstChild,t.lastChild]})}});let P=p(``),F=p(``);return t.insertBefore(P,t.firstChild),t.appendChild(F),[t.firstChild,t.lastChild]});return e==null?i():s(e,r,i)}})))};export{N as default};