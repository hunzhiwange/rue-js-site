import{$ as e,C as t,Ht as n,J as r,Lt as i,Q as a,T as o,W as s,X as c,Xt as l,Z as u,at as d,et as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b,n as x}from"./vapor-helpers-vapor-BjKHCvOa.js";import{i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./KeepAlive-hd4Kn7KC.js";import{t as w}from"./Code-CZqShVUj.js";import{r as T}from"./SidebarPlaygroundExample-5H7RL-T7.js";var E={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},D=s=>{let{clicks:u,meta:y}=b(`useSetup:0:0`,()=>g(()=>{let e=b(`ref:1:0`,()=>i(0)),n=E[s.name];return t(()=>{s.onEvent(`${n.title} onActivated`)}),o(()=>{s.onEvent(`${n.title} onDeactivated`)}),{clicks:e,meta:n}}));return p(t=>{let i=a(`section`,t);v(i,`card bg-base-100 shadow`);let o=a(`div`,i);r(i,o),v(o,`card-body gap-4`);let s=a(`div`,o);r(o,s),v(s,`flex items-center justify-between gap-4`);let p=a(`div`,s);r(s,p);let g=a(`h2`,p);r(p,g),v(g,`card-title`);let b=c(`rue:slot:anchor`);r(g,b),l(()=>{let e=y.title;n(()=>_(e,g,b))});let x=a(`p`,p);r(p,x),v(x,`text-sm opacity-70`);let S=c(`rue:slot:anchor`);r(x,S),l(()=>{let e=y.description;n(()=>_(e,x,S))});let C=a(`span`,s);r(s,C),l(()=>{v(C,`badge badge-${y.tone}`)}),r(C,e(`cached`));let w=a(`label`,o);r(o,w),v(w,`form-control w-full`);let T=a(`div`,w);r(w,T),v(T,`label`);let E=a(`span`,T);r(T,E),v(E,`label-text`),r(E,e(`本地输入状态`));let D=a(`input`,w);r(w,D),v(D,`input input-bordered`),l(()=>{d(D,`placeholder`,String(`写点 ${y.title} 的内容`))});let O=a(`div`,o);r(o,O),v(O,`flex items-center gap-3`);let k=a(`button`,O);r(O,k),l(()=>{v(k,`btn btn-${y.tone}`)}),h(k,`click`,()=>{u.value+=1}),r(k,e(`本地计数 +1`));let A=a(`span`,O);r(O,A),v(A,`stat-value text-2xl`);let j=f(A);return r(A,j),l(()=>{m(j,u.value)}),i})},O={profile:e=>p(t=>{let n=u(),i=c(`rue:component:anchor`);return r(n,i),_(y(D,{name:`profile`,onEvent:e.onEvent}),n,i),n}),settings:e=>p(t=>{let n=u(),i=c(`rue:component:anchor`);return r(n,i),_(y(D,{name:`settings`,onEvent:e.onEvent}),n,i),n})},k=`import {
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
}`,A=e=>p(()=>{let t=document.createDocumentFragment(),n=document.createComment(`on-activated-keep-alive-anchor`);return t.appendChild(n),b(`watchEffect:1:1`,()=>l(()=>{_(S(C,{children:S(s,{is:O[e.activeView.value],onEvent:e.onEvent},e.activeView.value)}),t,n)})),t}),j=()=>{let{activeTab:t,activeView:o,events:s,pushEvent:S}=b(`useSetup:0:0:dup1`,()=>g(()=>{let e=b(`ref:1:2`,()=>i(`preview`)),t=b(`ref:1:3`,()=>i(`profile`)),n=b(`ref:1:4`,()=>i([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{n.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...n.value].slice(0,8)}}}));return p(i=>{let g=u(),b=c(`rue:component:anchor`);return r(g,b),_(y(T,{children:p(()=>{let i=u(),g=a(`h1`,i);r(i,g),v(g,`text-5xl font-semibold mb-4 md:mb-4`),r(g,e(`onActivated 缓存生命周期`));let b=a(`div`,i);r(i,b),d(b,`role`,`tablist`),v(b,`tabs tabs-box`);let C=a(`button`,b);r(b,C),d(C,`role`,`tab`),l(()=>{v(C,`tab ${t.value===`preview`?`tab-active`:``}`)}),h(C,`click`,()=>{t.value=`preview`}),r(C,e(`效果`));let T=a(`button`,b);r(b,T),d(T,`role`,`tab`),l(()=>{v(T,`tab ${t.value===`code`?`tab-active`:``}`)}),h(T,`click`,()=>{t.value=`code`}),r(T,e(`代码`));let D=a(`div`,i);r(i,D),v(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=c(`rue:slot:anchor`);r(D,O),l(()=>{let e=t.value===`code`?p(()=>{let e=u(),t=a(`div`,e);r(e,t),v(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),v(i,`card-body p-0`);let o=c(`rue:component:anchor`);return r(i,o),l(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:k});n(()=>_(e,i,o))}),e}):``;n(()=>_(e,D,O))}),r(D,e(` `));let j=c(`rue:slot:anchor`);return r(D,j),l(()=>{let i=t.value===`preview`?p(()=>{let t=u(),i=a(`div`,t);r(t,i),v(i,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let d=a(`div`,i);r(i,d),v(d,`space-y-4`);let g=a(`div`,d);r(d,g),v(g,`join`);let b=c(`rue:list:start`),C=c(`rue:list:end`);r(g,b),r(g,C);let w=new Map;l(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:g,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,t,i,s,d)=>{_(p(()=>{let t=u(),i=a(`button`,t);r(t,i),l(()=>{v(i,`btn join-item ${o.value===e?`btn-${E[e].tone}`:`btn-outline`}`)}),h(i,`click`,()=>{o.value=e});let s=c(`rue:slot:anchor`);return r(i,s),l(()=>{let t=E[e].title;n(()=>_(t,i,s))}),t}),t,i)}})});let T=c(`rue:component:anchor`);r(d,T),l(()=>{let e=y(A,{activeView:o,onEvent:S});n(()=>_(e,d,T))});let D=a(`aside`,i);r(i,D),v(D,`card bg-base-100 shadow`);let O=a(`div`,D);r(D,O),v(O,`card-body`);let k=a(`div`,O);r(O,k),v(k,`flex items-center justify-between gap-3`);let j=a(`h2`,k);r(k,j),v(j,`card-title`),r(j,e(`生命周期日志`));let M=a(`button`,k);r(k,M),v(M,`btn btn-sm btn-ghost`),h(M,`click`,()=>{s.value=[]}),r(M,e(`清空`));let N=a(`ul`,O);r(O,N),v(N,`timeline timeline-vertical`);let P=c(`rue:slot:anchor`);r(N,P),l(()=>{let t=s.value.length===0?p(()=>{let t=u(),n=a(`li`,t);return r(t,n),v(n,`text-sm opacity-60`),r(n,e(`暂无事件`)),t}):``;n(()=>_(t,N,P))}),r(N,e(` `));let F=c(`rue:list:start`),I=c(`rue:list:end`);r(N,F),r(N,I);let L=new Map;return l(()=>{L=x({items:s.value||[],getKey:(e,t)=>t,elements:L,parent:N,before:I,singleRoot:!0,start:F,renderItem:(t,i,o,d,h)=>{_(p(()=>{let i=u(),o=a(`li`,i);r(i,o);let d=c(`rue:slot:anchor`);r(o,d),l(()=>{let e=h>0?p(()=>{let e=u();return r(e,a(`hr`,e)),e}):``;n(()=>_(e,o,d))});let g=a(`div`,o);r(o,g),v(g,`timeline-start text-xs opacity-60`),r(g,e(`#`));let y=f(g);r(g,y),l(()=>{m(y,s.value.length-h)});let b=a(`div`,o);r(o,b),v(b,`timeline-middle`);let x=a(`div`,b);r(b,x),v(x,`badge badge-outline badge-sm`);let S=a(`div`,o);r(o,S),v(S,`timeline-end text-sm`);let C=f(S);r(S,C),l(()=>{m(C,t)});let w=c(`rue:slot:anchor`);return r(o,w),l(()=>{let e=h<s.value.length-1?p(()=>{let e=u();return r(e,a(`hr`,e)),e}):``;n(()=>_(e,o,w))}),i}),i,o)}})}),t}):``;n(()=>_(i,D,j))}),i})}),g,b),g})};export{j as default};