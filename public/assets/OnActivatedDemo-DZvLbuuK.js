import{$ as e,K as t,Q as n,Qt as r,S as i,Wt as a,X as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,nt as p,o as m,st as h,t as g,tt as _,w as v,zt as y}from"./vapor-runtime-CXIalONM.js";import{a as b,n as x}from"./vapor-helpers-vapor-CoXKrGmY.js";import{i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./KeepAlive-Da7RpvkH.js";import{t as w}from"./Code-BIscIyEp.js";import{r as T}from"./SidebarPlaygroundExample-CEz1fABX.js";var E={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},D=e=>{let{clicks:t,meta:g}=b(`useSetup:0:0`,()=>c(()=>{let t=b(`ref:1:0`,()=>y(0)),n=E[e.name];return i(()=>{e.onEvent(`${n.title} onActivated`)}),v(()=>{e.onEvent(`${n.title} onDeactivated`)}),{clicks:t,meta:n}}));return d(e=>{let i=l(`section`,e);f(i,`card bg-base-100 shadow`);let c=l(`div`,i);o(i,c),f(c,`card-body gap-4`);let d=l(`div`,c);o(c,d),f(d,`flex items-center justify-between gap-4`);let v=l(`div`,d);o(d,v);let y=l(`h2`,v);o(v,y),f(y,`card-title`);let b=n(`rue:slot:anchor`);o(y,b),r(()=>{let e=g.title;a(()=>m(e,y,b))});let x=l(`p`,v);o(v,x),f(x,`text-sm opacity-70`);let S=n(`rue:slot:anchor`);o(x,S),r(()=>{let e=g.description;a(()=>m(e,x,S))});let C=l(`span`,d);o(d,C),r(()=>{f(C,`badge badge-${g.tone}`)}),o(C,_(`cached`));let w=l(`label`,c);o(c,w),f(w,`form-control w-full`);let T=l(`div`,w);o(w,T),f(T,`label`);let E=l(`span`,T);o(T,E),f(E,`label-text`),o(E,_(`本地输入状态`));let D=l(`input`,w);o(w,D),f(D,`input input-bordered`),r(()=>{h(D,`placeholder`,String(`写点 ${g.title} 的内容`))});let O=l(`div`,c);o(c,O),f(O,`flex items-center gap-3`);let k=l(`button`,O);o(O,k),r(()=>{f(k,`btn btn-${g.tone}`)}),s(k,`click`,()=>{t.value+=1}),o(k,_(`本地计数 +1`));let A=l(`span`,O);o(O,A),f(A,`stat-value text-2xl`);let j=p(A);return o(A,j),r(()=>{u(j,t.value)}),i})},O={profile:t=>d(r=>{let i=e(),a=n(`rue:component:anchor`);return o(i,a),m(g(D,{name:`profile`,onEvent:t.onEvent}),i,a),i}),settings:t=>d(r=>{let i=e(),a=n(`rue:component:anchor`);return o(i,a),m(g(D,{name:`settings`,onEvent:t.onEvent}),i,a),i})},k=`import {
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
}`,A=e=>d(()=>{let n=document.createDocumentFragment(),i=document.createComment(`on-activated-keep-alive-anchor`);return n.appendChild(i),b(`watchEffect:1:1`,()=>r(()=>{m(S(C,{children:S(t,{is:O[e.activeView.value],onEvent:e.onEvent},e.activeView.value)}),n,i)})),n}),j=()=>{let{activeTab:t,activeView:i,events:v,pushEvent:S}=b(`useSetup:0:0:dup1`,()=>c(()=>{let e=b(`ref:1:2`,()=>y(`preview`)),t=b(`ref:1:3`,()=>y(`profile`)),n=b(`ref:1:4`,()=>y([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{n.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...n.value].slice(0,8)}}}));return d(c=>{let y=e(),b=n(`rue:component:anchor`);return o(y,b),m(g(T,{children:d(()=>{let c=e(),y=l(`h1`,c);o(c,y),f(y,`text-5xl font-semibold mb-4 md:mb-4`),o(y,_(`onActivated 缓存生命周期`));let b=l(`div`,c);o(c,b),h(b,`role`,`tablist`),f(b,`tabs tabs-box`);let C=l(`button`,b);o(b,C),h(C,`role`,`tab`),r(()=>{f(C,`tab ${t.value===`preview`?`tab-active`:``}`)}),s(C,`click`,()=>{t.value=`preview`}),o(C,_(`效果`));let T=l(`button`,b);o(b,T),h(T,`role`,`tab`),r(()=>{f(T,`tab ${t.value===`code`?`tab-active`:``}`)}),s(T,`click`,()=>{t.value=`code`}),o(T,_(`代码`));let D=l(`div`,c);o(c,D),f(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=n(`rue:slot:anchor`);o(D,O),r(()=>{let i=t.value===`code`?d(()=>{let t=e(),i=l(`div`,t);o(t,i),f(i,`card bg-base-100 shadow overflow-auto`);let s=l(`div`,i);o(i,s),f(s,`card-body p-0`);let c=n(`rue:component:anchor`);return o(s,c),r(()=>{let e=g(w,{className:`h-full`,lang:`tsx`,code:k});a(()=>m(e,s,c))}),t}):``;a(()=>m(i,D,O))}),o(D,_(` `));let j=n(`rue:slot:anchor`);return o(D,j),r(()=>{let c=t.value===`preview`?d(()=>{let t=e(),c=l(`div`,t);o(t,c),f(c,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let h=l(`div`,c);o(c,h),f(h,`space-y-4`);let y=l(`div`,h);o(h,y),f(y,`join`);let b=n(`rue:list:start`),C=n(`rue:list:end`);o(y,b),o(y,C);let w=new Map;r(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,c,u,p,h)=>{m(d(()=>{let c=e(),u=l(`button`,c);o(c,u),r(()=>{f(u,`btn join-item ${i.value===t?`btn-${E[t].tone}`:`btn-outline`}`)}),s(u,`click`,()=>{i.value=t});let d=n(`rue:slot:anchor`);return o(u,d),r(()=>{let e=E[t].title;a(()=>m(e,u,d))}),c}),c,u)}})});let T=n(`rue:component:anchor`);o(h,T),r(()=>{let e=g(A,{activeView:i,onEvent:S});a(()=>m(e,h,T))});let D=l(`aside`,c);o(c,D),f(D,`card bg-base-100 shadow`);let O=l(`div`,D);o(D,O),f(O,`card-body`);let k=l(`div`,O);o(O,k),f(k,`flex items-center justify-between gap-3`);let j=l(`h2`,k);o(k,j),f(j,`card-title`),o(j,_(`生命周期日志`));let M=l(`button`,k);o(k,M),f(M,`btn btn-sm btn-ghost`),s(M,`click`,()=>{v.value=[]}),o(M,_(`清空`));let N=l(`ul`,O);o(O,N),f(N,`timeline timeline-vertical`);let P=n(`rue:slot:anchor`);o(N,P),r(()=>{let t=v.value.length===0?d(()=>{let t=e(),n=l(`li`,t);return o(t,n),f(n,`text-sm opacity-60`),o(n,_(`暂无事件`)),t}):``;a(()=>m(t,N,P))}),o(N,_(` `));let F=n(`rue:list:start`),I=n(`rue:list:end`);o(N,F),o(N,I);let L=new Map;return r(()=>{L=x({items:v.value||[],getKey:(e,t)=>t,elements:L,parent:N,before:I,singleRoot:!0,start:F,renderItem:(t,i,s,c,h)=>{m(d(()=>{let i=e(),s=l(`li`,i);o(i,s);let c=n(`rue:slot:anchor`);o(s,c),r(()=>{let t=h>0?d(()=>{let t=e();return o(t,l(`hr`,t)),t}):``;a(()=>m(t,s,c))});let g=l(`div`,s);o(s,g),f(g,`timeline-start text-xs opacity-60`),o(g,_(`#`));let y=p(g);o(g,y),r(()=>{u(y,v.value.length-h)});let b=l(`div`,s);o(s,b),f(b,`timeline-middle`);let x=l(`div`,b);o(b,x),f(x,`badge badge-outline badge-sm`);let S=l(`div`,s);o(s,S),f(S,`timeline-end text-sm`);let C=p(S);o(S,C),r(()=>{u(C,t)});let w=n(`rue:slot:anchor`);return o(s,w),r(()=>{let t=h<v.value.length-1?d(()=>{let t=e();return o(t,l(`hr`,t)),t}):``;a(()=>m(t,s,w))}),i}),i,s)}})}),t}):``;a(()=>m(c,D,j))}),c})}),y,b),y})};export{j as default};