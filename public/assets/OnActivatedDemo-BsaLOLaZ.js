import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,g as o,ht as s,mt as c,ot as l,pn as u,pt as d,rt as f,st as p,tn as m,v as h,vn as g}from"./context-8lXZvIn-.js";import{l as _,o as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b,n as x}from"./vapor-helpers-vapor-CMwHgsXf.js";import{l as S}from"./src-DnK6Cdoa.js";import{t as C}from"./Code-DhoWkRkB.js";import{t as w}from"./src-CCTNpCXV.js";import{r as T}from"./SidebarPlaygroundExample-B78jsvoF.js";var E={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},D=a=>{let{clicks:f,meta:y}=b(`useSetup:0:0`,()=>e(()=>{let e=b(`ref:1:0`,()=>u(0)),t=E[a.name];return o(()=>{a.onEvent(`${t.title} onActivated`)}),h(()=>{a.onEvent(`${t.title} onDeactivated`)}),{clicks:e,meta:t}}));return _(e=>{let a=d(`section`,e);r(a,`card bg-base-100 shadow`);let o=d(`div`,a);p(a,o),r(o,`card-body gap-4`);let u=d(`div`,o);p(o,u),r(u,`flex items-center justify-between gap-4`);let h=d(`div`,u);p(u,h);let _=d(`h2`,h);p(h,_),r(_,`card-title`);let b=i(`rue:slot:anchor`);p(_,b),m(()=>{let e=y.title;g(()=>v(e,_,b))});let x=d(`p`,h);p(h,x),r(x,`text-sm opacity-70`);let S=i(`rue:slot:anchor`);p(x,S),m(()=>{let e=y.description;g(()=>v(e,x,S))});let C=d(`span`,u);p(u,C),m(()=>{r(C,`badge badge-${y.tone}`)}),p(C,c(`cached`));let w=d(`label`,o);p(o,w),r(w,`form-control w-full`);let T=d(`div`,w);p(w,T),r(T,`label`);let E=d(`span`,T);p(T,E),r(E,`label-text`),p(E,c(`本地输入状态`));let D=d(`input`,w);p(w,D),r(D,`input input-bordered`),m(()=>{t(D,`placeholder`,String(`写点 ${y.title} 的内容`))});let O=d(`div`,o);p(o,O),r(O,`flex items-center gap-3`);let k=d(`button`,O);p(O,k),m(()=>{r(k,`btn btn-${y.tone}`)}),l(k,`click`,()=>{f.value+=1}),p(k,c(`本地计数 +1`));let A=d(`span`,O);p(O,A),r(A,`stat-value text-2xl`);let j=s(A);return p(A,j),m(()=>{n(j,f.value)}),a})},O={profile:e=>_(t=>{let n=a(),r=i(`rue:component:anchor`);return p(n,r),v(y(D,{name:`profile`,onEvent:e.onEvent}),n,r),n}),settings:e=>_(t=>{let n=a(),r=i(`rue:component:anchor`);return p(n,r),v(y(D,{name:`settings`,onEvent:e.onEvent}),n,r),n})},k=`import {
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
}`,A=e=>_(()=>{let t=document.createDocumentFragment(),n=document.createComment(`on-activated-keep-alive-anchor`);return t.appendChild(n),b(`watchEffect:1:1`,()=>m(()=>{v(w(S,{children:w(f,{is:O[e.activeView.value],onEvent:e.onEvent},e.activeView.value)}),t,n)})),t}),j=()=>{let{activeTab:o,activeView:f,events:h,pushEvent:S}=b(`useSetup:0:0:dup1`,()=>e(()=>{let e=b(`ref:1:2`,()=>u(`preview`)),t=b(`ref:1:3`,()=>u(`profile`)),n=b(`ref:1:4`,()=>u([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{let t=new Date().toLocaleTimeString();n.value=[`${t} \xb7 ${e}`,...n.value].slice(0,8)}}}));return _(e=>{let u=a(),b=i(`rue:component:anchor`);return p(u,b),v(y(T,{children:_(()=>{let e=a(),u=d(`h1`,e);p(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),p(u,c(`onActivated 缓存生命周期`));let b=d(`div`,e);p(e,b),t(b,`role`,`tablist`),r(b,`tabs tabs-box`);let w=d(`button`,b);p(b,w),t(w,`role`,`tab`),m(()=>{r(w,`tab ${o.value===`preview`?`tab-active`:``}`)}),l(w,`click`,()=>{o.value=`preview`}),p(w,c(`效果`));let T=d(`button`,b);p(b,T),t(T,`role`,`tab`),m(()=>{r(T,`tab ${o.value===`code`?`tab-active`:``}`)}),l(T,`click`,()=>{o.value=`code`}),p(T,c(`代码`));let D=d(`div`,e);p(e,D),r(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=i(`rue:slot:anchor`);p(D,O),m(()=>{let e=o.value===`code`?_(()=>{let e=a(),t=d(`div`,e);p(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=d(`div`,t);p(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return p(n,o),m(()=>{let e=y(C,{className:`h-full`,lang:`tsx`,code:k});g(()=>v(e,n,o))}),e}):``;g(()=>v(e,D,O))}),p(D,c(` `));let j=i(`rue:slot:anchor`);return p(D,j),m(()=>{let e=o.value===`preview`?_(()=>{let e=a(),t=d(`div`,e);p(e,t),r(t,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let o=d(`div`,t);p(t,o),r(o,`space-y-4`);let u=d(`div`,o);p(o,u),r(u,`join`);let b=i(`rue:list:start`),C=i(`rue:list:end`);p(u,b),p(u,C);let w=new Map;m(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:u,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,t,n,o,s)=>{v(_(()=>{let t=a(),n=d(`button`,t);p(t,n),m(()=>{r(n,`btn join-item ${f.value===e?`btn-${E[e].tone}`:`btn-outline`}`)}),l(n,`click`,()=>{f.value=e});let o=i(`rue:slot:anchor`);return p(n,o),m(()=>{let t=E[e].title;g(()=>v(t,n,o))}),t}),t,n)}})});let T=i(`rue:component:anchor`);p(o,T),m(()=>{let e=y(A,{activeView:f,onEvent:S});g(()=>v(e,o,T))});let D=d(`aside`,t);p(t,D),r(D,`card bg-base-100 shadow`);let O=d(`div`,D);p(D,O),r(O,`card-body`);let k=d(`div`,O);p(O,k),r(k,`flex items-center justify-between gap-3`);let j=d(`h2`,k);p(k,j),r(j,`card-title`),p(j,c(`生命周期日志`));let M=d(`button`,k);p(k,M),r(M,`btn btn-sm btn-ghost`),l(M,`click`,()=>{h.value=[]}),p(M,c(`清空`));let N=d(`ul`,O);p(O,N),r(N,`timeline timeline-vertical`);let P=i(`rue:slot:anchor`);p(N,P),m(()=>{let e=h.value.length===0?_(()=>{let e=a(),t=d(`li`,e);return p(e,t),r(t,`text-sm opacity-60`),p(t,c(`暂无事件`)),e}):``;g(()=>v(e,N,P))}),p(N,c(` `));let F=i(`rue:list:start`),I=i(`rue:list:end`);p(N,F),p(N,I);let L=new Map;return m(()=>{L=x({items:h.value||[],getKey:(e,t)=>t,elements:L,parent:N,before:I,singleRoot:!0,start:F,renderItem:(e,t,o,l,u)=>{v(_(()=>{let t=a(),o=d(`li`,t);p(t,o);let l=i(`rue:slot:anchor`);p(o,l),m(()=>{let e=u>0?_(()=>{let e=a();return p(e,d(`hr`,e)),e}):``;g(()=>v(e,o,l))});let f=d(`div`,o);p(o,f),r(f,`timeline-start text-xs opacity-60`),p(f,c(`#`));let y=s(f);p(f,y),m(()=>{n(y,h.value.length-u)});let b=d(`div`,o);p(o,b),r(b,`timeline-middle`);let x=d(`div`,b);p(b,x),r(x,`badge badge-outline badge-sm`);let S=d(`div`,o);p(o,S),r(S,`timeline-end text-sm`);let C=s(S);p(S,C),m(()=>{n(C,e)});let w=i(`rue:slot:anchor`);return p(o,w),m(()=>{let e=u<h.value.length-1?_(()=>{let e=a();return p(e,d(`hr`,e)),e}):``;g(()=>v(e,o,w))}),t}),t,o)}})}),e}):``;g(()=>v(e,D,j))}),e})}),u,b),u})};export{j as default};