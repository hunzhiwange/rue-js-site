import{$t as e,C as t,J as n,Jt as r,Q as i,T as a,Z as o,dt as s,et as c,in as l,it as u,l as d,lt as f,nt as p,o as m,rt as h,t as g,tt as _,vt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b,n as x}from"./vapor-helpers-vapor-Dg64FcpK.js";import{i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./KeepAlive-zJaZ_QxY.js";import{t as w}from"./Code-4SUSUwRg.js";import{r as T}from"./SidebarPlaygroundExample-BEWYUWOl.js";var E={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},D=n=>{let{clicks:g,meta:_}=b(`useSetup:0:0`,()=>l(()=>{let e=b(`ref:1:0`,()=>r(0)),i=E[n.name];return t(()=>{n.onEvent(`${i.title} onActivated`)}),a(()=>{n.onEvent(`${i.title} onDeactivated`)}),{clicks:e,meta:i}}));return d(t=>{let n=p(`section`,t);s(n,`card bg-base-100 shadow`);let r=p(`div`,n);i(n,r),s(r,`card-body gap-4`);let a=p(`div`,r);i(r,a),s(a,`flex items-center justify-between gap-4`);let l=p(`div`,a);i(a,l);let d=p(`h2`,l);i(l,d),s(d,`card-title`);let b=c(`rue:slot:anchor`);i(d,b),y(()=>{let t=_.title;e(()=>m(t,d,b))});let x=p(`p`,l);i(l,x),s(x,`text-sm opacity-70`);let S=c(`rue:slot:anchor`);i(x,S),y(()=>{let t=_.description;e(()=>m(t,x,S))});let C=p(`span`,a);i(a,C),y(()=>{s(C,`badge badge-${_.tone}`)}),i(C,h(`cached`));let w=p(`label`,r);i(r,w),s(w,`form-control w-full`);let T=p(`div`,w);i(w,T),s(T,`label`);let E=p(`span`,T);i(T,E),s(E,`label-text`),i(E,h(`本地输入状态`));let D=p(`input`,w);i(w,D),s(D,`input input-bordered`),y(()=>{f(D,`placeholder`,String(`写点 ${_.title} 的内容`))});let O=p(`div`,r);i(r,O),s(O,`flex items-center gap-3`);let k=p(`button`,O);i(O,k),y(()=>{s(k,`btn btn-${_.tone}`)}),o(k,`click`,()=>{g.value+=1}),i(k,h(`本地计数 +1`));let A=p(`span`,O);i(O,A),s(A,`stat-value text-2xl`);let j=u(A);return i(A,j),y(()=>{v(j,g.value)}),n})},O={profile:e=>d(t=>{let n=_(),r=c(`rue:component:anchor`);return i(n,r),m(g(D,{name:`profile`,onEvent:e.onEvent}),n,r),n}),settings:e=>d(t=>{let n=_(),r=c(`rue:component:anchor`);return i(n,r),m(g(D,{name:`settings`,onEvent:e.onEvent}),n,r),n})},k=`import {
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
}`,A=e=>d(()=>{let t=document.createDocumentFragment(),r=document.createComment(`on-activated-keep-alive-anchor`);return t.appendChild(r),b(`watchEffect:1:1`,()=>y(()=>{m(S(C,{children:S(n,{is:O[e.activeView.value],onEvent:e.onEvent},e.activeView.value)}),t,r)})),t}),j=()=>{let{activeTab:t,activeView:n,events:a,pushEvent:S}=b(`useSetup:0:0:dup1`,()=>l(()=>{let e=b(`ref:1:2`,()=>r(`preview`)),t=b(`ref:1:3`,()=>r(`profile`)),n=b(`ref:1:4`,()=>r([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{n.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...n.value].slice(0,8)}}}));return d(r=>{let l=_(),b=c(`rue:component:anchor`);return i(l,b),m(g(T,{children:d(()=>{let r=_(),l=p(`h1`,r);i(r,l),s(l,`text-5xl font-semibold mb-4 md:mb-4`),i(l,h(`onActivated 缓存生命周期`));let b=p(`div`,r);i(r,b),f(b,`role`,`tablist`),s(b,`tabs tabs-box`);let C=p(`button`,b);i(b,C),f(C,`role`,`tab`),y(()=>{s(C,`tab ${t.value===`preview`?`tab-active`:``}`)}),o(C,`click`,()=>{t.value=`preview`}),i(C,h(`效果`));let T=p(`button`,b);i(b,T),f(T,`role`,`tab`),y(()=>{s(T,`tab ${t.value===`code`?`tab-active`:``}`)}),o(T,`click`,()=>{t.value=`code`}),i(T,h(`代码`));let D=p(`div`,r);i(r,D),s(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=c(`rue:slot:anchor`);i(D,O),y(()=>{let n=t.value===`code`?d(()=>{let t=_(),n=p(`div`,t);i(t,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=p(`div`,n);i(n,r),s(r,`card-body p-0`);let a=c(`rue:component:anchor`);return i(r,a),y(()=>{let t=g(w,{className:`h-full`,lang:`tsx`,code:k});e(()=>m(t,r,a))}),t}):``;e(()=>m(n,D,O))}),i(D,h(` `));let j=c(`rue:slot:anchor`);return i(D,j),y(()=>{let r=t.value===`preview`?d(()=>{let t=_(),r=p(`div`,t);i(t,r),s(r,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let l=p(`div`,r);i(r,l),s(l,`space-y-4`);let f=p(`div`,l);i(l,f),s(f,`join`);let b=c(`rue:list:start`),C=c(`rue:list:end`);i(f,b),i(f,C);let w=new Map;y(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:f,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,r,a,l,u)=>{m(d(()=>{let r=_(),a=p(`button`,r);i(r,a),y(()=>{s(a,`btn join-item ${n.value===t?`btn-${E[t].tone}`:`btn-outline`}`)}),o(a,`click`,()=>{n.value=t});let l=c(`rue:slot:anchor`);return i(a,l),y(()=>{let n=E[t].title;e(()=>m(n,a,l))}),r}),r,a)}})});let T=c(`rue:component:anchor`);i(l,T),y(()=>{let t=g(A,{activeView:n,onEvent:S});e(()=>m(t,l,T))});let D=p(`aside`,r);i(r,D),s(D,`card bg-base-100 shadow`);let O=p(`div`,D);i(D,O),s(O,`card-body`);let k=p(`div`,O);i(O,k),s(k,`flex items-center justify-between gap-3`);let j=p(`h2`,k);i(k,j),s(j,`card-title`),i(j,h(`生命周期日志`));let M=p(`button`,k);i(k,M),s(M,`btn btn-sm btn-ghost`),o(M,`click`,()=>{a.value=[]}),i(M,h(`清空`));let N=p(`ul`,O);i(O,N),s(N,`timeline timeline-vertical`);let P=c(`rue:slot:anchor`);i(N,P),y(()=>{let t=a.value.length===0?d(()=>{let e=_(),t=p(`li`,e);return i(e,t),s(t,`text-sm opacity-60`),i(t,h(`暂无事件`)),e}):``;e(()=>m(t,N,P))}),i(N,h(` `));let F=c(`rue:list:start`),I=c(`rue:list:end`);i(N,F),i(N,I);let L=new Map;return y(()=>{L=x({items:a.value||[],getKey:(e,t)=>t,elements:L,parent:N,before:I,singleRoot:!0,start:F,renderItem:(t,n,r,o,l)=>{m(d(()=>{let n=_(),r=p(`li`,n);i(n,r);let o=c(`rue:slot:anchor`);i(r,o),y(()=>{let t=l>0?d(()=>{let e=_();return i(e,p(`hr`,e)),e}):``;e(()=>m(t,r,o))});let f=p(`div`,r);i(r,f),s(f,`timeline-start text-xs opacity-60`),i(f,h(`#`));let g=u(f);i(f,g),y(()=>{v(g,a.value.length-l)});let b=p(`div`,r);i(r,b),s(b,`timeline-middle`);let x=p(`div`,b);i(b,x),s(x,`badge badge-outline badge-sm`);let S=p(`div`,r);i(r,S),s(S,`timeline-end text-sm`);let C=u(S);i(S,C),y(()=>{v(C,t)});let w=c(`rue:slot:anchor`);return i(r,w),y(()=>{let t=l<a.value.length-1?d(()=>{let e=_();return i(e,p(`hr`,e)),e}):``;e(()=>m(t,r,w))}),n}),n,r)}})}),t}):``;e(()=>m(r,D,j))}),r})}),l,b),l})};export{j as default};