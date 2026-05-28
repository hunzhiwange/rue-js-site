import{$ as e,G as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,j as p,k as m,l as h,mt as g,ot as _,t as v,tt as y}from"./vapor-runtime-BR_2rwNk.js";import{a as b,n as x}from"./vapor-helpers-vapor-DkadWylb.js";import{t as S}from"./KeepAlive-WcY_63e7.js";import{t as C}from"./Code-B_4lzH85.js";import{t as w}from"./SidebarPlaygroundExample-CtM-WHq_.js";var T={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},E=t=>{let{clicks:a,meta:v}=b(`useSetup:0:0`,()=>r(()=>{let e=b(`ref:1:0`,()=>i(0)),n=T[t.name];return m(()=>{t.onEvent(`${n.title} onActivated`)}),p(()=>{t.onEvent(`${n.title} onDeactivated`)}),{clicks:e,meta:n}}));return d(t=>{let r=e(`section`,t);u(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-4`);let d=e(`div`,i);s(i,d),u(d,`flex items-center justify-between gap-4`);let p=e(`div`,d);s(d,p);let m=e(`h2`,p);s(p,m),u(m,`card-title`);let b=l(`rue:slot:anchor`);s(m,b),c(()=>{let e=v.title;o(()=>h(e,m,b))});let x=e(`p`,p);s(p,x),u(x,`text-sm opacity-70`);let S=l(`rue:slot:anchor`);s(x,S),c(()=>{let e=v.description;o(()=>h(e,x,S))});let C=e(`span`,d);s(d,C),c(()=>{u(C,String(`badge badge-${v.tone}`))}),s(C,f(`cached`));let w=e(`label`,i);s(i,w),u(w,`form-control w-full`);let T=e(`div`,w);s(w,T),u(T,`label`);let E=e(`span`,T);s(T,E),u(E,`label-text`),s(E,f(`本地输入状态`));let D=e(`input`,w);s(w,D),u(D,`input input-bordered`),c(()=>{_(D,`placeholder`,String(`写点 ${v.title} 的内容`))});let O=e(`div`,i);s(i,O),u(O,`flex items-center gap-3`);let k=e(`button`,O);s(O,k),c(()=>{u(k,String(`btn btn-${v.tone}`))}),n(k,`click`,()=>{a.value+=1}),s(k,f(`本地计数 +1`));let A=e(`span`,O);s(O,A),u(A,`stat-value text-2xl`);let j=y(A);return s(A,j),c(()=>{g(j,a.value)}),r})},D={profile:e=>d(t=>{let n=a(),r=l(`rue:component:anchor`);return s(n,r),h(v(E,{name:`profile`,onEvent:e.onEvent}),n,r),n}),settings:e=>d(t=>{let n=a(),r=l(`rue:component:anchor`);return s(n,r),h(v(E,{name:`settings`,onEvent:e.onEvent}),n,r),n})},O=`import {
  Component,
  KeepAlive,
  onActivated,
  onDeactivated,
  ref,
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

      <KeepAlive>
        <Component is={views[active.value]} key={active.value} onEvent={pushEvent} />
      </KeepAlive>

      <ul>{events.value.map(event => <li>{event}</li>)}</ul>
    </>
  )
}`,k=()=>{let{activeTab:p,activeView:m,events:E,pushEvent:k}=b(`useSetup:0:0:dup1`,()=>r(()=>{let e=b(`ref:1:1`,()=>i(`preview`)),t=b(`ref:1:2`,()=>i(`profile`)),n=b(`ref:1:3`,()=>i([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{n.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...n.value].slice(0,8)}}}));return d(r=>{let i=a(),b=l(`rue:component:anchor`);return s(i,b),h(v(w,{children:d(()=>{let r=a(),i=e(`h1`,r);s(r,i),u(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,f(`onActivated 缓存生命周期`));let b=e(`div`,r);s(r,b),_(b,`role`,`tablist`),u(b,`tabs tabs-box`);let w=e(`button`,b);s(b,w),_(w,`role`,`tab`),c(()=>{u(w,String(`tab ${p.value===`preview`?`tab-active`:``}`))}),n(w,`click`,()=>{p.value=`preview`}),s(w,f(`效果`));let A=e(`button`,b);s(b,A),_(A,`role`,`tab`),c(()=>{u(A,String(`tab ${p.value===`code`?`tab-active`:``}`))}),n(A,`click`,()=>{p.value=`code`}),s(A,f(`代码`));let j=e(`div`,r);s(r,j),u(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=l(`rue:slot:anchor`);s(j,M),c(()=>{let t=p.value===`code`?d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=v(C,{className:`h-full`,lang:`tsx`,code:O});o(()=>h(e,r,i))}),t}):``;o(()=>h(t,j,M))}),s(j,f(` `));let N=l(`rue:slot:anchor`);return s(j,N),c(()=>{let r=p.value===`preview`?d(()=>{let r=a(),i=e(`div`,r);s(r,i),u(i,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let p=e(`div`,i);s(i,p),u(p,`space-y-4`);let _=e(`div`,p);s(p,_),u(_,`join`);let b=l(`rue:list:start`),C=l(`rue:list:end`);s(_,b),s(_,C);let w=new Map;c(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:_,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,r,i,f,p)=>{h(d(()=>{let r=a(),i=e(`button`,r);s(r,i),c(()=>{u(i,String(`btn join-item ${m.value===t?`btn-${T[t].tone}`:`btn-outline`}`))}),n(i,`click`,()=>{m.value=t});let d=l(`rue:slot:anchor`);return s(i,d),c(()=>{let e=T[t].title;o(()=>h(e,i,d))}),r}),r,i)}})});let O=l(`rue:component:anchor`);s(p,O),h(v(S,{children:v(t,{is:D[m.value],key:m.value,onEvent:k})}),p,O);let A=e(`aside`,i);s(i,A),u(A,`card bg-base-100 shadow`);let j=e(`div`,A);s(A,j),u(j,`card-body`);let M=e(`div`,j);s(j,M),u(M,`flex items-center justify-between gap-3`);let N=e(`h2`,M);s(M,N),u(N,`card-title`),s(N,f(`生命周期日志`));let P=e(`button`,M);s(M,P),u(P,`btn btn-sm btn-ghost`),n(P,`click`,()=>{E.value=[]}),s(P,f(`清空`));let F=e(`ul`,j);s(j,F),u(F,`timeline timeline-vertical`);let I=l(`rue:slot:anchor`);s(F,I),c(()=>{let t=E.value.length===0?d(()=>{let t=a(),n=e(`li`,t);return s(t,n),u(n,`text-sm opacity-60`),s(n,f(`暂无事件`)),t}):``;o(()=>h(t,F,I))}),s(F,f(` `));let L=l(`rue:list:start`),R=l(`rue:list:end`);s(F,L),s(F,R);let z=new Map;return c(()=>{z=x({items:E.value||[],getKey:(e,t)=>t,elements:z,parent:F,before:R,singleRoot:!0,start:L,renderItem:(t,n,r,i,p)=>{h(d(()=>{let n=a(),r=e(`li`,n);s(n,r);let i=l(`rue:slot:anchor`);s(r,i),c(()=>{let t=p>0?d(()=>{let t=a();return s(t,e(`hr`,t)),t}):``;o(()=>h(t,r,i))});let m=e(`div`,r);s(r,m),u(m,`timeline-start text-xs opacity-60`),s(m,f(`#`));let _=y(m);s(m,_),c(()=>{g(_,E.value.length-p)});let v=e(`div`,r);s(r,v),u(v,`timeline-middle`);let b=e(`div`,v);s(v,b),u(b,`badge badge-outline badge-sm`);let x=e(`div`,r);s(r,x),u(x,`timeline-end text-sm`);let S=y(x);s(x,S),c(()=>{g(S,t)});let C=l(`rue:slot:anchor`);return s(r,C),c(()=>{let t=p<E.value.length-1?d(()=>{let t=a();return s(t,e(`hr`,t)),t}):``;o(()=>h(t,r,C))}),n}),n,r)}})}),r}):``;o(()=>h(r,j,N))}),r})}),i,b),i})};export{k as default};