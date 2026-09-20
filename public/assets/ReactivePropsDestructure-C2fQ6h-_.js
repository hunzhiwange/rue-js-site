import{Bt as e,H as t,U as n,Ut as r,V as i,Vt as a,Wt as o,Y as s,_t as c,en as l,fn as u,ft as d,gn as f,gt as p,hn as m,in as h,mn as g,pn as _,sn as v,st as y,tt as b,u as x,vt as S,yn as C,yt as w,zt as T}from"./rue-runtime-Cv6BZekS.js";import{t as E}from"./Code-BzFVdc3U.js";import{r as D}from"./SidebarPlaygroundExample-rFyhXfC_.js";var O=`import { computed, ref, type FC, watchEffect } from '@rue-js/rue'
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
`,k=C(`<section class="card border border-success/25 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="space-y-1"><div class="badge badge-success badge-outline">/* RUE_REACTIVE_PROPS_DESTRUCTURED */</div><h2 class="text-lg font-semibold">编译器改写后的解构 props</h2><p class="text-sm leading-6 text-base-content/72">这个子组件直接写了解构、默认值和别名，但读取会被编译器改写成隐藏 props 对象访问，所以仍然保持响应式。</p></div><div class="grid gap-3 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></section>`),A=C(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Reactive Props Destructure</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个 demo 用来验证新的编译器能力：组件参数解构里的 query、count、label 会被重写成隐藏 props 对象访问。 所以默认值、别名和嵌套回调里的读取都还能跟着父 props 一起变化。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),j=(t,r,i)=>{let a=S(p(t,`label`)),s=S(p(t,`value`));return n(o(t=>{let n=m(`div`,t);n.setAttribute(`class`,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let r=m(`span`,n);u(n,r),r.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let i=_(`rue:compiled-slot`);u(r,i),e({parent:r,before:i},()=>T(a.get()),()=>({}));let o=m(`span`,n);u(n,o),o.setAttribute(`class`,`rounded-lg border border-base-300/70 bg-base-100 px-2.5 py-1.5 font-mono text-xs md:text-sm`);let c=_(`rue:compiled-slot`);return u(o,c),e({parent:o,before:c},()=>T(s.get()),()=>({})),[n,n]}),e=>l(()=>{a.set(e.label),s.set(e.value)}),()=>c(t))},M=(t,r,u)=>{let f=S(p(t,`count`)),m=S(p(t,`label`)),h=S(p(t,`query`)),g=b(()=>`${m.get()===void 0?`fallback-label`:m.get()}:${(h.get()===void 0?`fallback-query`:h.get()).trim().toUpperCase()} x ${f.get()}`),_=y(``),v=e=>e.toLowerCase();return d(()=>{_.value=`${h.get()===void 0?`fallback-query`:h.get()}|${f.get()}|${m.get()===void 0?`fallback-label`:m.get()}|${v(h.get()===void 0?`fallback-query`:h.get())}`}),s(()=>n(o(t=>{let n=k().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[0],o=r.parentNode,s=n.childNodes[0].childNodes[1].childNodes[1],c=s.parentNode,l=n.childNodes[0].childNodes[1].childNodes[2],u=l.parentNode,d=n.childNodes[0].childNodes[1].childNodes[3],p=d.parentNode,y=(e,t,n)=>{let r=()=>i(j,()=>({label:`summary.get()`,value:g.get()}));return e==null?r():a(e,n,r)},b=r.nextSibling;o.removeChild(r),e({parent:o,before:b},()=>y,()=>({}));let x=(e,t,n)=>{let r=()=>i(j,()=>({label:`watchEffect latest`,value:_.value}));return e==null?r():a(e,n,r)},S=s.nextSibling;c.removeChild(s),e({parent:c,before:S},()=>x,()=>({}));let C=(e,t,n)=>{let r=()=>i(j,()=>({label:`shadow(query)`,value:v(h.get()===void 0?`fallback-query`:h.get())}));return e==null?r():a(e,n,r)},w=l.nextSibling;u.removeChild(l),e({parent:u,before:w},()=>C,()=>({}));let T=(e,t,n)=>{let r=()=>i(j,()=>({label:`render text`,value:`${h.get()===void 0?`fallback-query`:h.get()} / ${f.get()} / ${m.get()===void 0?`fallback-label`:m.get()}`}));return e==null?r():a(e,n,r)},E=d.nextSibling;return p.removeChild(d),e({parent:p,before:E},()=>T,()=>({})),[n,n]}),e=>l(()=>{f.set(e.count),m.set(e.label),h.set(e.query)}),()=>c(t)))},N=(e,n,c)=>{let l=y(`preview`),d=y(` transfer `),p=y(2),_=y(`runtime-label`),b=y(!0),S=y(!0);return s(()=>i(D,()=>({children:(e,n,i)=>{let s=()=>o(e=>{let n=g(),i=A().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[1].childNodes[0],c=a.childNodes[1].childNodes[1],y=a.childNodes[2].childNodes[0],C=y.parentNode,T=a.childNodes[2].childNodes[1],D=T.parentNode;n.appendChild(i),s.setAttribute(`role`,`tab`);let k;h(()=>{let e=`tab ${l.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,s.setAttribute(`class`,t))}),v(x(e,s,`click`,()=>()=>{l.value=`preview`})),c.setAttribute(`role`,`tab`);let N;h(()=>{let e=`tab ${l.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,c.setAttribute(`class`,t))}),v(x(e,c,`click`,()=>()=>{l.value=`code`})),r(C,y,()=>{let e=l.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=g(),r=m(`section`,n);u(n,r),r.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let i=m(`div`,r);u(r,i),i.setAttribute(`class`,`card-body gap-5`);let a=m(`div`,i);u(i,a),a.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let o=m(`label`,a);u(a,o),o.setAttribute(`class`,`form-control grid gap-2`);let s=m(`span`,o);u(o,s),s.setAttribute(`class`,`label-text font-medium`),u(s,f(`父组件 query`));let c=m(`input`,o);u(o,c),c.setAttribute(`class`,`input input-bordered`);let l;h(()=>{let e=d.value,t=e==null?``:String(e);Object.is(l,t)||(l=t,c.value=t)});let y=e=>{let t=e=>{d.value=e.target.value};typeof t==`function`&&t(e)};c.addEventListener(`input`,y),v(()=>c.removeEventListener(`input`,y));let x=m(`label`,a);u(a,x),x.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let C=m(`input`,x);u(x,C),C.setAttribute(`class`,`checkbox checkbox-sm`),C.setAttribute(`type`,`checkbox`);let w;h(()=>{let e=!!b.value;Object.is(w,e)||(w=e,C.checked=e)});let T=e=>{let t=e=>{b.value=!!e.target.checked};typeof t==`function`&&t(e)};C.addEventListener(`input`,T),v(()=>C.removeEventListener(`input`,T));let E=m(`span`,x);u(x,E),E.setAttribute(`class`,`label-text`),u(E,f(`传入 query`));let D=m(`div`,i);u(i,D),D.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let O=m(`label`,D);u(D,O),O.setAttribute(`class`,`form-control grid gap-2`);let k=m(`span`,O);u(O,k),k.setAttribute(`class`,`label-text font-medium`),u(k,f(`父组件 label`));let A=m(`input`,O);u(O,A),A.setAttribute(`class`,`input input-bordered`);let N;h(()=>{let e=_.value,t=e==null?``:String(e);Object.is(N,t)||(N=t,A.value=t)});let P=e=>{let t=e=>{_.value=e.target.value};typeof t==`function`&&t(e)};A.addEventListener(`input`,P),v(()=>A.removeEventListener(`input`,P));let F=m(`label`,D);u(D,F),F.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let I=m(`input`,F);u(F,I),I.setAttribute(`class`,`checkbox checkbox-sm`),I.setAttribute(`type`,`checkbox`);let L;h(()=>{let e=!!S.value;Object.is(L,e)||(L=e,I.checked=e)});let R=e=>{let t=e=>{S.value=!!e.target.checked};typeof t==`function`&&t(e)};I.addEventListener(`input`,R),v(()=>I.removeEventListener(`input`,R));let z=m(`span`,F);u(F,z),z.setAttribute(`class`,`label-text`),u(z,f(`传入 label`));let B=m(`div`,i);u(i,B),B.setAttribute(`class`,`grid gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center`);let V=m(`span`,B);u(B,V),V.setAttribute(`class`,`text-sm font-medium`),u(V,f(`父组件 count`));let H=m(`input`,B);u(B,H),H.setAttribute(`class`,`range range-primary`),H.setAttribute(`type`,`range`),H.setAttribute(`min`,`0`),H.setAttribute(`max`,`12`),H.setAttribute(`step`,`1`);let U;h(()=>{let e=String(p.value),t=e==null?``:String(e);Object.is(U,t)||(U=t,H.value=t)});let W=e=>{let t=e=>{p.value=Number(e.target.value)};typeof t==`function`&&t(e)};H.addEventListener(`input`,W),v(()=>H.removeEventListener(`input`,W));let G=m(`div`,i);u(i,G),G.setAttribute(`class`,`grid gap-3 md:grid-cols-3`),t(G,j,()=>({label:`raw query`,value:b.value?d.value:void 0})),t(G,j,()=>({label:`raw label`,value:S.value?_.value:void 0})),t(G,j,()=>({label:`raw count`,value:p.value})),t(n,M,()=>({query:b.value?d.value:void 0,count:p.value,label:S.value?_.value:void 0}));let K=m(`div`,n);u(n,K),K.setAttribute(`class`,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),u(K,f(`观察重点： 1. 关闭 query 或 label 传入后，子组件会退回默认值。 2. 改动 count、query、label 时，summary 和 watchEffect latest 会同步更新。 3. 子组件里故意写了 shadow(query) 这个局部参数，用来验证局部遮蔽不会被误改写。 4. 对于 watch(query, ...) 这种按值传递，编译器会给 warning，要求改成 watch(() => query, ...)。`));let q=f(``),J=f(``);return n.insertBefore(q,n.firstChild),n.appendChild(J),[n.firstChild,n.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>w(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=g();return[t.firstChild,t.lastChild]})}}),r(D,T,()=>{let e=l.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=m(`div`,e);n.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let r=m(`div`,n);return u(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,E,()=>({className:`h-full`,lang:`tsx`,code:O})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>w(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=g();return[t.firstChild,t.lastChild]})}});let P=f(``),F=f(``);return n.insertBefore(P,n.firstChild),n.appendChild(F),[n.firstChild,n.lastChild]});return e==null?s():a(e,i,s)}})))};export{N as default};