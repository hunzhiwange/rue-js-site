import{B as e,Bt as t,C as n,Dn as r,Et as i,Ft as a,H as o,K as s,L as c,Lt as l,Mt as u,Nt as d,S as f,V as p,W as m,Y as h,_n as g,_t as _,bn as v,fn as y,gn as b,hn as x,ht as S,kn as C,l as w,m as T,nt as E,ot as D,pn as O,q as k,wn as A,x as j,z as M}from"./rue-runtime-CwEGJ854.js";import{t as N}from"./Code-DUvGro8N.js";import{r as P}from"./SidebarPlaygroundExample-EGR0CyDT.js";var F=g(`<section class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex items-center justify-between gap-4"><div><h2 class="card-title"><!--rue:text-hole:0--></h2><p class="text-sm opacity-70"><!--rue:text-hole:1--></p></div><span>cached</span></div><label class="form-control w-full"><div class="label"><span class="label-text">本地输入状态</span></div><input class="input input-bordered"></label><div class="flex items-center gap-3"><button>本地计数 +1</button><span class="stat-value text-2xl"><!--rue:text-hole:2--></span></div></div></section>`),I=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onActivated 缓存生命周期</h1>`),L=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),R=g(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),z={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},B=e=>{let n=m(e.name),r=m(e.onEvent),i=t(0),o=z[n.get()];return d(()=>{r.get()(`${o.title} onActivated`)}),a(()=>{r.get()(`${o.title} onDeactivated`)}),u(()=>k(S(()=>{let e=E(),t=F().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0].childNodes[0].childNodes[1],a=n.childNodes[0].childNodes[1].childNodes[1],s=n.childNodes[0].childNodes[2].childNodes[0],u=n.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0],d=u.parentNode,f=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],p=f.parentNode,m=n.childNodes[0].childNodes[2].childNodes[1].childNodes[0],g=m.parentNode;e.appendChild(t),A(()=>{c(r,`badge badge-${o.tone}`)}),c(a,`input input-bordered`),A(()=>{D(a,`placeholder`,String(`写点 ${o.title} 的内容`))}),A(()=>{c(s,`btn btn-${o.tone}`)});let _=e=>{let t=()=>{i.value+=1};typeof t==`function`&&t(e)};return s.addEventListener(`click`,_),l(()=>s.removeEventListener(`click`,_)),A(()=>{let e=o.title;C(()=>h(e,d,u))}),A(()=>{let e=o.description;C(()=>h(e,p,f))}),A(()=>{let e=i.value;C(()=>h(e,g,m))}),e},!0),e=>M(()=>{n.set(e.name),r.set(e.onEvent)}),()=>e))},V={profile:e=>o(B,()=>({name:`profile`,onEvent:e.onEvent})),settings:e=>o(B,()=>({name:`settings`,onEvent:e.onEvent}))},H=`import {
  Component,
  KeepAlive,
  onActivated,
  onDeactivated,
  ref,
  renderAnchor,
  vapor,
  watchEffect,
  type FC,
} from '@rue-js/rue'

const Panel: FC<{ name: string; onEvent: (message: string) => void }> = props => {
  const clicks = ref(0)

  onActivated(() => props.onEvent(\`\${props.name} onActivated\`))
  onDeactivated(() => props.onEvent(\`\${props.name} onDeactivated\`))

  return (
    <section>
      <h2>{props.name}</h2>
      <input placeholder="本地输入状态会被保留" />
      <button onClick={() => (clicks.value += 1)}>本地计数 +1</button>
      <span>{clicks.value}</span>
    </section>
  )
}

const views = {
  profile: (props) => <Panel name="profile" onEvent={props.onEvent} />,
  settings: (props) => <Panel name="settings" onEvent={props.onEvent} />,
}

const KeepAliveViewport: FC<{
  activeView: { value: 'profile' | 'settings' }
  onEvent: (message: string) => void
}> = props => {
  return vapor(() => {
    const root = document.createDocumentFragment()
    const anchor = document.createComment('keep-alive-anchor')
    root.appendChild(anchor)

    watchEffect(() => {
      renderAnchor(
        <KeepAlive>
          <Component
            is={views[props.activeView.value]}
            key={props.activeView.value}
            onEvent={props.onEvent}
          />
        </KeepAlive>,
        root as any,
        anchor as any,
      )
    })

    return root as any
  }) as any
}

const App: FC = () => {
  const active = ref<'profile' | 'settings'>('profile')
  const events = ref<string[]>([])
  const pushEvent = (message: string) => {
    events.value = [message, ...events.value].slice(0, 6)
  }

  return (
    <>
      <button onClick={() => (active.value = 'profile')}>资料面板</button>
      <button onClick={() => (active.value = 'settings')}>设置面板</button>

      <KeepAliveViewport activeView={active} onEvent={pushEvent} />

      <ul>{events.value.map(event => <li>{event}</li>)}</ul>
    </>
  )
}`,U=e=>{let t=m(e.activeView),n=m(e.onEvent);return k((()=>{let e=_(w,()=>({is:V[t.get().value],key:t.get().value,onEvent:e=>n.get()(e)}));return _(T,()=>({cacheKey:t.get().value,cacheName:V[t.get().value].name,children:e}))})(),e=>M(()=>{t.set(e.activeView),n.set(e.onEvent)}),()=>e)},W=()=>{let a=t(`preview`),d=t(`profile`),g=t([]),_=e=>{let t=new Date().toLocaleTimeString();g.value=[`${t} \xb7 ${e}`,...g.value].slice(0,8)};return u(()=>k(o(P,()=>({children:[(e,t,n)=>j(e,n,()=>i(Object.assign(e=>{let t=E();return t.appendChild(I().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>j(e,n,()=>i(Object.assign(e=>{let t=E(),n=L().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],o=r.childNodes[1];t.appendChild(n),D(i,`role`,`tab`),A(()=>{c(i,`tab ${a.value===`preview`?`tab-active`:``}`)});let s=e=>{let t=()=>{a.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,s),l(()=>i.removeEventListener(`click`,s)),D(o,`role`,`tab`),A(()=>{c(o,`tab ${a.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{a.value=`code`};typeof t==`function`&&t(e)};return o.addEventListener(`click`,u),l(()=>o.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,o,c)=>j(t,c,()=>i(Object.assign(t=>{let o=E(),c=R().content.cloneNode(!0),l=c.firstChild,u=l.childNodes[0],S=u.parentNode,w=l.childNodes[1],T=w.parentNode;return o.appendChild(c),p(S,u,()=>{let e=a.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=x(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=x(`div`,t);return y(t,n),n.className=`card-body p-0`,s(n,N,()=>({className:`h-full`,lang:`tsx`,code:H})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=b(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=E();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),p(T,w,()=>{let t=a.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let a=x(`div`,t);a.className=`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`;let o=x(`div`,a);y(a,o),o.className=`space-y-4`;let c=x(`div`,o);y(o,c),c.className=`join`;let l=O(`rue:list:end`);y(c,l);let u=[];A(()=>{u=n(c,l,u,[`profile`,`settings`],(e,t)=>t,(e,t)=>{let n=m(e),a=m(t);return f((e,t,a)=>j(e,a,()=>i(Object.assign(e=>{let t=x(`button`,e),i;A(()=>{let e=`btn join-item ${d.value===n.get()?`btn-${z[n.get()].tone}`:`btn-outline`}`,r=e==null?``:String(e);Object.is(i,r)||(i=r,t.className=r)});let a=e=>{let t=()=>{d.value=n.get()};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),r(()=>t.removeEventListener(`click`,a));let o=O(`rue:compiled-slot`);return y(t,o),A(()=>{let e=z[n.get()].title;C(()=>h(e,t,o))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})}),s(o,U,()=>({activeView:d,onEvent:_}));let p=x(`aside`,a);y(a,p),p.className=`card bg-base-100 shadow`;let S=x(`div`,p);y(p,S),S.className=`card-body`;let w=x(`div`,S);y(S,w),w.className=`flex items-center justify-between gap-3`;let T=x(`h2`,w);y(w,T),T.className=`card-title`,y(T,b(`生命周期日志`));let D=x(`button`,w);y(w,D),D.className=`btn btn-sm btn-ghost`;let k=e=>{let t=()=>{g.value=[]};typeof t==`function`&&t(e)};D.addEventListener(`click`,k),r(()=>D.removeEventListener(`click`,k)),y(D,b(`清空`));let M=x(`ul`,S);y(S,M),M.className=`timeline timeline-vertical`,e(()=>{let e=g.value.length===0;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=x(`li`,e);return t.className=`text-sm opacity-60`,y(t,b(`暂无事件`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=b(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=E();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(M);let N=O(`rue:list:end`);y(M,N);let P=[];return A(()=>{let t=g.value||[];P=n(M,N,P,t,(e,t)=>t,(t,n)=>{let r=m(t),a=m(n);return f((t,n,o)=>j(t,o,()=>i(Object.assign(t=>{let n=x(`li`,t);e(()=>{let e=a.get()>0;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=x(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=b(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=E();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(n);let o=x(`div`,n);y(n,o),o.className=`timeline-start text-xs opacity-60`,y(o,b(`#`));let s=b(``);y(o,s),v(s,()=>g.value.length-a.get());let c=x(`div`,n);y(n,c),c.className=`timeline-middle`;let l=x(`div`,c);y(c,l),l.className=`badge badge-outline badge-sm`;let u=x(`div`,n);y(n,u),u.className=`timeline-end text-sm`;let d=b(``);return y(u,d),v(d,()=>r.get()),e(()=>{let e=a.get()<g.value.length-1;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=x(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=b(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=E();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(n),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,i)=>{t=e,n=i,r.set(e),a.set(i)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=b(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=E();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})))]})),e=>M(()=>{})))};export{W as default};