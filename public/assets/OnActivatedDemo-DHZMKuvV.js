import{$ as e,$t as t,Bt as n,Gt as r,S as i,X as a,Xt as o,Z as s,ct as c,et as l,gt as u,l as d,nt as f,o as p,q as m,rt as h,t as g,tt as _,ut as v,w as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b,n as x}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./KeepAlive-CB9L6C0S.js";import{t as w}from"./Code-D5UqTwV6.js";import{r as T}from"./SidebarPlaygroundExample-D2vGHFCu.js";var E={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},D=l=>{let{clicks:m,meta:g}=b(`useSetup:0:0`,()=>o(()=>{let e=b(`ref:1:0`,()=>n(0)),t=E[l.name];return i(()=>{l.onEvent(`${t.title} onActivated`)}),y(()=>{l.onEvent(`${t.title} onDeactivated`)}),{clicks:e,meta:t}}));return d(n=>{let i=_(`section`,n);v(i,`card bg-base-100 shadow`);let o=_(`div`,i);s(i,o),v(o,`card-body gap-4`);let l=_(`div`,o);s(o,l),v(l,`flex items-center justify-between gap-4`);let d=_(`div`,l);s(l,d);let y=_(`h2`,d);s(d,y),v(y,`card-title`);let b=e(`rue:slot:anchor`);s(y,b),t(()=>{let e=g.title;r(()=>p(e,y,b))});let x=_(`p`,d);s(d,x),v(x,`text-sm opacity-70`);let S=e(`rue:slot:anchor`);s(x,S),t(()=>{let e=g.description;r(()=>p(e,x,S))});let C=_(`span`,l);s(l,C),t(()=>{v(C,`badge badge-${g.tone}`)}),s(C,f(`cached`));let w=_(`label`,o);s(o,w),v(w,`form-control w-full`);let T=_(`div`,w);s(w,T),v(T,`label`);let E=_(`span`,T);s(T,E),v(E,`label-text`),s(E,f(`本地输入状态`));let D=_(`input`,w);s(w,D),v(D,`input input-bordered`),t(()=>{c(D,`placeholder`,String(`写点 ${g.title} 的内容`))});let O=_(`div`,o);s(o,O),v(O,`flex items-center gap-3`);let k=_(`button`,O);s(O,k),t(()=>{v(k,`btn btn-${g.tone}`)}),a(k,`click`,()=>{m.value+=1}),s(k,f(`本地计数 +1`));let A=_(`span`,O);s(O,A),v(A,`stat-value text-2xl`);let j=h(A);return s(A,j),t(()=>{u(j,m.value)}),i})},O={profile:t=>d(n=>{let r=l(),i=e(`rue:component:anchor`);return s(r,i),p(g(D,{name:`profile`,onEvent:t.onEvent}),r,i),r}),settings:t=>d(n=>{let r=l(),i=e(`rue:component:anchor`);return s(r,i),p(g(D,{name:`settings`,onEvent:t.onEvent}),r,i),r})},k=`import {
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
}`,A=e=>d(()=>{let n=document.createDocumentFragment(),r=document.createComment(`on-activated-keep-alive-anchor`);return n.appendChild(r),b(`watchEffect:1:1`,()=>t(()=>{p(S(C,{children:S(m,{is:O[e.activeView.value],onEvent:e.onEvent},e.activeView.value)}),n,r)})),n}),j=()=>{let{activeTab:i,activeView:m,events:y,pushEvent:S}=b(`useSetup:0:0:dup1`,()=>o(()=>{let e=b(`ref:1:2`,()=>n(`preview`)),t=b(`ref:1:3`,()=>n(`profile`)),r=b(`ref:1:4`,()=>n([]));return{activeTab:e,activeView:t,events:r,pushEvent:e=>{r.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...r.value].slice(0,8)}}}));return d(n=>{let o=l(),b=e(`rue:component:anchor`);return s(o,b),p(g(T,{children:d(()=>{let n=l(),o=_(`h1`,n);s(n,o),v(o,`text-5xl font-semibold mb-4 md:mb-4`),s(o,f(`onActivated 缓存生命周期`));let b=_(`div`,n);s(n,b),c(b,`role`,`tablist`),v(b,`tabs tabs-box`);let C=_(`button`,b);s(b,C),c(C,`role`,`tab`),t(()=>{v(C,`tab ${i.value===`preview`?`tab-active`:``}`)}),a(C,`click`,()=>{i.value=`preview`}),s(C,f(`效果`));let T=_(`button`,b);s(b,T),c(T,`role`,`tab`),t(()=>{v(T,`tab ${i.value===`code`?`tab-active`:``}`)}),a(T,`click`,()=>{i.value=`code`}),s(T,f(`代码`));let D=_(`div`,n);s(n,D),v(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=e(`rue:slot:anchor`);s(D,O),t(()=>{let n=i.value===`code`?d(()=>{let n=l(),i=_(`div`,n);s(n,i),v(i,`card bg-base-100 shadow overflow-auto`);let a=_(`div`,i);s(i,a),v(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=g(w,{className:`h-full`,lang:`tsx`,code:k});r(()=>p(e,a,o))}),n}):``;r(()=>p(n,D,O))}),s(D,f(` `));let j=e(`rue:slot:anchor`);return s(D,j),t(()=>{let n=i.value===`preview`?d(()=>{let n=l(),i=_(`div`,n);s(n,i),v(i,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let o=_(`div`,i);s(i,o),v(o,`space-y-4`);let c=_(`div`,o);s(o,c),v(c,`join`);let b=e(`rue:list:start`),C=e(`rue:list:end`);s(c,b),s(c,C);let w=new Map;t(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:c,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(n,i,o,c,u)=>{p(d(()=>{let i=l(),o=_(`button`,i);s(i,o),t(()=>{v(o,`btn join-item ${m.value===n?`btn-${E[n].tone}`:`btn-outline`}`)}),a(o,`click`,()=>{m.value=n});let c=e(`rue:slot:anchor`);return s(o,c),t(()=>{let e=E[n].title;r(()=>p(e,o,c))}),i}),i,o)}})});let T=e(`rue:component:anchor`);s(o,T),t(()=>{let e=g(A,{activeView:m,onEvent:S});r(()=>p(e,o,T))});let D=_(`aside`,i);s(i,D),v(D,`card bg-base-100 shadow`);let O=_(`div`,D);s(D,O),v(O,`card-body`);let k=_(`div`,O);s(O,k),v(k,`flex items-center justify-between gap-3`);let j=_(`h2`,k);s(k,j),v(j,`card-title`),s(j,f(`生命周期日志`));let M=_(`button`,k);s(k,M),v(M,`btn btn-sm btn-ghost`),a(M,`click`,()=>{y.value=[]}),s(M,f(`清空`));let N=_(`ul`,O);s(O,N),v(N,`timeline timeline-vertical`);let P=e(`rue:slot:anchor`);s(N,P),t(()=>{let e=y.value.length===0?d(()=>{let e=l(),t=_(`li`,e);return s(e,t),v(t,`text-sm opacity-60`),s(t,f(`暂无事件`)),e}):``;r(()=>p(e,N,P))}),s(N,f(` `));let F=e(`rue:list:start`),I=e(`rue:list:end`);s(N,F),s(N,I);let L=new Map;return t(()=>{L=x({items:y.value||[],getKey:(e,t)=>t,elements:L,parent:N,before:I,singleRoot:!0,start:F,renderItem:(n,i,a,o,c)=>{p(d(()=>{let i=l(),a=_(`li`,i);s(i,a);let o=e(`rue:slot:anchor`);s(a,o),t(()=>{let e=c>0?d(()=>{let e=l();return s(e,_(`hr`,e)),e}):``;r(()=>p(e,a,o))});let m=_(`div`,a);s(a,m),v(m,`timeline-start text-xs opacity-60`),s(m,f(`#`));let g=h(m);s(m,g),t(()=>{u(g,y.value.length-c)});let b=_(`div`,a);s(a,b),v(b,`timeline-middle`);let x=_(`div`,b);s(b,x),v(x,`badge badge-outline badge-sm`);let S=_(`div`,a);s(a,S),v(S,`timeline-end text-sm`);let C=h(S);s(S,C),t(()=>{u(C,n)});let w=e(`rue:slot:anchor`);return s(a,w),t(()=>{let e=c<y.value.length-1?d(()=>{let e=l();return s(e,_(`hr`,e)),e}):``;r(()=>p(e,a,w))}),i}),i,a)}})}),n}):``;r(()=>p(n,D,j))}),n})}),o,b),o})};export{j as default};