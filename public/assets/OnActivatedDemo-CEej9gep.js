import{At as e,C as t,Dn as n,E as r,Jt as i,Mt as a,Q as o,Qt as s,Vt as c,Xt as l,_n as u,_t as d,at as f,b as p,ct as m,et as h,f as g,gn as _,kn as v,mn as y,nt as b,pn as x,qt as S,rt as C,st as w,tn as T,tt as E,ut as D,v as O,vn as k,w as A,wn as j,xn as M,xt as N}from"./rue-runtime-HIMg8Lz8.js";import{t as P}from"./Code-DpH7u0gk.js";import{r as F}from"./SidebarPlaygroundExample-BCPRe0hA.js";var I=k(`<section class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex items-center justify-between gap-4"><div><h2 class="card-title"><!--rue:text-hole:0--></h2><p class="text-sm opacity-70"><!--rue:text-hole:1--></p></div><span>cached</span></div><label class="form-control w-full"><div class="label"><span class="label-text">本地输入状态</span></div><input class="input input-bordered"></label><div class="flex items-center gap-3"><button>本地计数 +1</button><span class="stat-value text-2xl"><!--rue:text-hole:2--></span></div></div></section>`),L=k(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onActivated 缓存生命周期</h1>`),R=k(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),z=k(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),B={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},V=t=>{let n=f(t.name),r=f(t.onEvent),a=T(0),c=B[n.get()];return i(()=>{r.get()(`${c.title} onActivated`)}),l(()=>{r.get()(`${c.title} onDeactivated`)}),S(()=>m(e(()=>{let e=d(),t=I().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0].childNodes[0].childNodes[1],i=n.childNodes[0].childNodes[1].childNodes[1],l=n.childNodes[0].childNodes[2].childNodes[0],u=n.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0],f=u.parentNode,p=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],m=p.parentNode,h=n.childNodes[0].childNodes[2].childNodes[1].childNodes[0],g=h.parentNode;e.appendChild(t),j(()=>{o(r,`badge badge-${c.tone}`)}),o(i,`input input-bordered`),j(()=>{N(i,`placeholder`,String(`写点 ${c.title} 的内容`))}),j(()=>{o(l,`btn btn-${c.tone}`)});let _=e=>{let t=()=>{a.value+=1};typeof t==`function`&&t(e)};return l.addEventListener(`click`,_),s(()=>l.removeEventListener(`click`,_)),j(()=>{let e=c.title;v(()=>D(e,f,u))}),j(()=>{let e=c.description;v(()=>D(e,m,p))}),j(()=>{let e=a.value;v(()=>D(e,g,h))}),e},!0),e=>h(()=>{n.set(e.name),r.set(e.onEvent)}),()=>t))},H={profile:e=>C(V,()=>({name:`profile`,onEvent:e.onEvent})),settings:e=>C(V,()=>({name:`settings`,onEvent:e.onEvent}))},U=`import {
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
}`,W=e=>{let t=f(e.activeView),n=f(e.onEvent);return m((()=>{let e=a(O,()=>({is:H[t.get().value],key:t.get().value,onEvent:e=>n.get()(e)}));return a(g,()=>({cacheKey:t.get().value,cacheName:H[t.get().value].name,children:e}))})(),e=>h(()=>{t.set(e.activeView),n.set(e.onEvent)}),()=>e)},G=()=>{let e=T(`preview`),i=T(`profile`),a=T([]),l=e=>{let t=new Date().toLocaleTimeString();a.value=[`${t} \xb7 ${e}`,...a.value].slice(0,8)};return S(()=>m(C(F,()=>({children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=d();return t.appendChild(L().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n,i)=>r(t,i,()=>c(Object.assign(t=>{let n=d(),r=R().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],c=i.childNodes[1];n.appendChild(r),N(a,`role`,`tab`),j(()=>{o(a,`tab ${e.value===`preview`?`tab-active`:``}`)});let l=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),N(c,`role`,`tab`),j(()=>{o(c,`tab ${e.value===`code`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return c.addEventListener(`click`,u),s(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(o,s,m)=>r(o,m,()=>c(Object.assign(o=>{let s=d(),m=z().content.cloneNode(!0),h=m.firstChild,g=h.childNodes[0],S=g.parentNode,C=h.childNodes[1],T=C.parentNode;return s.appendChild(m),b(S,g,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=_(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=_(`div`,t);return x(t,n),n.className=`card-body p-0`,w(n,P,()=>({className:`h-full`,lang:`tsx`,code:U})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>c(Object.assign(e=>{let n=u(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),b(T,C,()=>{let o=e.value===`preview`;return o?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let o=_(`div`,e);o.className=`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`;let s=_(`div`,o);x(o,s),s.className=`space-y-4`;let m=_(`div`,s);x(s,m),m.className=`join`;let h=y(`rue:list:end`);x(m,h);let g=[];j(()=>{g=A(m,h,g,[`profile`,`settings`],(e,t)=>t,(e,a)=>{let o=f(e);return t((e,t,a)=>r(e,a,()=>c(Object.assign(e=>{let t=_(`button`,e),r;j(()=>{let e=`btn join-item ${i.value===o.get()?`btn-${B[o.get()].tone}`:`btn-outline`}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let a=e=>{let t=()=>{i.value=o.get()};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),n(()=>t.removeEventListener(`click`,a));let s=y(`rue:compiled-slot`);return x(t,s),j(()=>{let e=B[o.get()].title;v(()=>D(e,t,s))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,a=n,o.set(t)})})}),n(()=>p(g)),w(s,W,()=>({activeView:i,onEvent:l}));let b=_(`aside`,o);x(o,b),b.className=`card bg-base-100 shadow`;let S=_(`div`,b);x(b,S),S.className=`card-body`;let C=_(`div`,S);x(S,C),C.className=`flex items-center justify-between gap-3`;let T=_(`h2`,C);x(C,T),T.className=`card-title`,x(T,u(`生命周期日志`));let O=_(`button`,C);x(C,O),O.className=`btn btn-sm btn-ghost`;let k=e=>{let t=()=>{a.value=[]};typeof t==`function`&&t(e)};O.addEventListener(`click`,k),n(()=>O.removeEventListener(`click`,k)),x(O,u(`清空`));let N=_(`ul`,S);x(S,N),N.className=`timeline timeline-vertical`,E(()=>{let e=a.value.length===0;return e?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=_(`li`,e);return t.className=`text-sm opacity-60`,x(t,u(`暂无事件`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(N);let P=y(`rue:list:end`);x(N,P);let F=[];return j(()=>{let e=a.value||[];F=A(N,P,F,e,(e,t)=>t,(e,n)=>{let i=f(e),o=f(n);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=_(`li`,e);E(()=>{let e=o.get()>0;return e?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=_(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(t);let n=_(`div`,t);x(t,n),n.className=`timeline-start text-xs opacity-60`,x(n,u(`#`));let r=u(``);x(n,r),M(r,()=>a.value.length-o.get());let s=_(`div`,t);x(t,s),s.className=`timeline-middle`;let l=_(`div`,s);x(s,l),l.className=`badge badge-outline badge-sm`;let f=_(`div`,t);x(t,f),f.className=`timeline-end text-sm`;let p=u(``);return x(f,p),M(p,()=>i.get()),E(()=>{let e=o.get()<a.value.length-1;return e?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=_(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t),o.set(r)})})}),n(()=>p(F)),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0}))}:typeof o==`number`||typeof o==`bigint`?{__rue_compiled_branch_key:o,create:()=>c(Object.assign(e=>{let t=u(typeof o==`string`||typeof o==`number`||typeof o==`bigint`?o:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})))]})),e=>h(()=>{})))};export{G as default};