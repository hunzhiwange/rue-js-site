import{C as e,J as t,Q as n,T as r,Vt as i,Xt as a,Z as o,at as s,bt as c,dt as l,it as u,l as d,nt as f,o as p,on as m,pt as h,rt as g,t as _,tn as v,tt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as x}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as S}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as C}from"./KeepAlive-CPK-kywO.js";import{t as w}from"./Code-C5NjdoiC.js";import{r as T}from"./SidebarPlaygroundExample-DpItFif-.js";var E={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},D=t=>{let{clicks:f,meta:_}=b(`useSetup:0:0`,()=>m(()=>{let n=b(`ref:1:0`,()=>a(0)),i=E[t.name];return e(()=>{t.onEvent(`${i.title} onActivated`)}),r(()=>{t.onEvent(`${i.title} onDeactivated`)}),{clicks:n,meta:i}}));return d(e=>{let t=g(`section`,e);h(t,`card bg-base-100 shadow`);let r=g(`div`,t);n(t,r),h(r,`card-body gap-4`);let a=g(`div`,r);n(r,a),h(a,`flex items-center justify-between gap-4`);let d=g(`div`,a);n(a,d);let m=g(`h2`,d);n(d,m),h(m,`card-title`);let b=y(`rue:slot:anchor`);n(m,b),i(()=>{let e=_.title;v(()=>p(e,m,b))});let x=g(`p`,d);n(d,x),h(x,`text-sm opacity-70`);let S=y(`rue:slot:anchor`);n(x,S),i(()=>{let e=_.description;v(()=>p(e,x,S))});let C=g(`span`,a);n(a,C),i(()=>{h(C,`badge badge-${_.tone}`)}),n(C,u(`cached`));let w=g(`label`,r);n(r,w),h(w,`form-control w-full`);let T=g(`div`,w);n(w,T),h(T,`label`);let E=g(`span`,T);n(T,E),h(E,`label-text`),n(E,u(`本地输入状态`));let D=g(`input`,w);n(w,D),h(D,`input input-bordered`),i(()=>{l(D,`placeholder`,String(`写点 ${_.title} 的内容`))});let O=g(`div`,r);n(r,O),h(O,`flex items-center gap-3`);let k=g(`button`,O);n(O,k),i(()=>{h(k,`btn btn-${_.tone}`)}),o(k,`click`,()=>{f.value+=1}),n(k,u(`本地计数 +1`));let A=g(`span`,O);n(O,A),h(A,`stat-value text-2xl`);let j=s(A);return n(A,j),i(()=>{c(j,f.value)}),t})},O={profile:e=>d(t=>{let r=f(),i=y(`rue:component:anchor`);return n(r,i),p(_(D,{name:`profile`,onEvent:e.onEvent}),r,i),r}),settings:e=>d(t=>{let r=f(),i=y(`rue:component:anchor`);return n(r,i),p(_(D,{name:`settings`,onEvent:e.onEvent}),r,i),r})},k=`import {
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
}`,A=e=>d(()=>{let n=document.createDocumentFragment(),r=document.createComment(`on-activated-keep-alive-anchor`);return n.appendChild(r),b(`watchEffect:1:1`,()=>i(()=>{p(S(C,{children:S(t,{is:O[e.activeView.value],onEvent:e.onEvent},e.activeView.value)}),n,r)})),n}),j=()=>{let{activeTab:e,activeView:t,events:r,pushEvent:S}=b(`useSetup:0:0:dup1`,()=>m(()=>{let e=b(`ref:1:2`,()=>a(`preview`)),t=b(`ref:1:3`,()=>a(`profile`)),n=b(`ref:1:4`,()=>a([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{n.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...n.value].slice(0,8)}}}));return d(a=>{let m=f(),b=y(`rue:component:anchor`);return n(m,b),p(_(T,{children:d(()=>{let a=f(),m=g(`h1`,a);n(a,m),h(m,`text-5xl font-semibold mb-4 md:mb-4`),n(m,u(`onActivated 缓存生命周期`));let b=g(`div`,a);n(a,b),l(b,`role`,`tablist`),h(b,`tabs tabs-box`);let C=g(`button`,b);n(b,C),l(C,`role`,`tab`),i(()=>{h(C,`tab ${e.value===`preview`?`tab-active`:``}`)}),o(C,`click`,()=>{e.value=`preview`}),n(C,u(`效果`));let T=g(`button`,b);n(b,T),l(T,`role`,`tab`),i(()=>{h(T,`tab ${e.value===`code`?`tab-active`:``}`)}),o(T,`click`,()=>{e.value=`code`}),n(T,u(`代码`));let D=g(`div`,a);n(a,D),h(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=y(`rue:slot:anchor`);n(D,O),i(()=>{let t=e.value===`code`?d(()=>{let e=f(),t=g(`div`,e);n(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let r=g(`div`,t);n(t,r),h(r,`card-body p-0`);let a=y(`rue:component:anchor`);return n(r,a),i(()=>{let e=_(w,{className:`h-full`,lang:`tsx`,code:k});v(()=>p(e,r,a))}),e}):``;v(()=>p(t,D,O))}),n(D,u(` `));let j=y(`rue:slot:anchor`);return n(D,j),i(()=>{let a=e.value===`preview`?d(()=>{let e=f(),a=g(`div`,e);n(e,a),h(a,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let l=g(`div`,a);n(a,l),h(l,`space-y-4`);let m=g(`div`,l);n(l,m),h(m,`join`);let b=y(`rue:list:start`),C=y(`rue:list:end`);n(m,b),n(m,C);let w=new Map;i(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:m,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,a,s,c)=>{p(d(()=>{let r=f(),a=g(`button`,r);n(r,a),i(()=>{h(a,`btn join-item ${t.value===e?`btn-${E[e].tone}`:`btn-outline`}`)}),o(a,`click`,()=>{t.value=e});let s=y(`rue:slot:anchor`);return n(a,s),i(()=>{let t=E[e].title;v(()=>p(t,a,s))}),r}),r,a)}})});let T=y(`rue:component:anchor`);n(l,T),i(()=>{let e=_(A,{activeView:t,onEvent:S});v(()=>p(e,l,T))});let D=g(`aside`,a);n(a,D),h(D,`card bg-base-100 shadow`);let O=g(`div`,D);n(D,O),h(O,`card-body`);let k=g(`div`,O);n(O,k),h(k,`flex items-center justify-between gap-3`);let j=g(`h2`,k);n(k,j),h(j,`card-title`),n(j,u(`生命周期日志`));let M=g(`button`,k);n(k,M),h(M,`btn btn-sm btn-ghost`),o(M,`click`,()=>{r.value=[]}),n(M,u(`清空`));let N=g(`ul`,O);n(O,N),h(N,`timeline timeline-vertical`);let P=y(`rue:slot:anchor`);n(N,P),i(()=>{let e=r.value.length===0?d(()=>{let e=f(),t=g(`li`,e);return n(e,t),h(t,`text-sm opacity-60`),n(t,u(`暂无事件`)),e}):``;v(()=>p(e,N,P))}),n(N,u(` `));let F=y(`rue:list:start`),I=y(`rue:list:end`);n(N,F),n(N,I);let L=new Map;return i(()=>{L=x({items:r.value||[],getKey:(e,t)=>t,elements:L,parent:N,before:I,singleRoot:!0,start:F,renderItem:(e,t,a,o,l)=>{p(d(()=>{let t=f(),a=g(`li`,t);n(t,a);let o=y(`rue:slot:anchor`);n(a,o),i(()=>{let e=l>0?d(()=>{let e=f();return n(e,g(`hr`,e)),e}):``;v(()=>p(e,a,o))});let m=g(`div`,a);n(a,m),h(m,`timeline-start text-xs opacity-60`),n(m,u(`#`));let _=s(m);n(m,_),i(()=>{c(_,r.value.length-l)});let b=g(`div`,a);n(a,b),h(b,`timeline-middle`);let x=g(`div`,b);n(b,x),h(x,`badge badge-outline badge-sm`);let S=g(`div`,a);n(a,S),h(S,`timeline-end text-sm`);let C=s(S);n(S,C),i(()=>{c(C,e)});let w=y(`rue:slot:anchor`);return n(a,w),i(()=>{let e=l<r.value.length-1?d(()=>{let e=f();return n(e,g(`hr`,e)),e}):``;v(()=>p(e,a,w))}),t}),t,a)}})}),e}):``;v(()=>p(a,D,j))}),a})}),m,b),m})};export{j as default};