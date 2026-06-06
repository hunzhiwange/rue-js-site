import{$ as e,E as t,G as n,J as r,Kt as i,Lt as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,et as f,l as p,mt as m,ot as h,s as g,t as _,tt as v,w as y}from"./vapor-runtime-DHPuOjqh.js";import{a as b,n as x}from"./vapor-helpers-vapor-CJFAWine.js";import{t as S}from"./KeepAlive-BGL0kX9E.js";import{t as C}from"./Code-Ds9lKLk6.js";import{t as w}from"./SidebarPlaygroundExample-KML-rOvA.js";var T={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},E=n=>{let{clicks:o,meta:_}=b(`useSetup:0:0`,()=>i(()=>{let e=b(`ref:1:0`,()=>a(0)),r=T[n.name];return y(()=>{n.onEvent(`${r.title} onActivated`)}),t(()=>{n.onEvent(`${r.title} onDeactivated`)}),{clicks:e,meta:r}}));return p(t=>{let n=e(`section`,t);d(n,`card bg-base-100 shadow`);let i=e(`div`,n);c(n,i),d(i,`card-body gap-4`);let a=e(`div`,i);c(i,a),d(a,`flex items-center justify-between gap-4`);let p=e(`div`,a);c(a,p);let y=e(`h2`,p);c(p,y),d(y,`card-title`);let b=u(`rue:slot:anchor`);c(y,b),l(()=>{let e=_.title;s(()=>g(e,y,b))});let x=e(`p`,p);c(p,x),d(x,`text-sm opacity-70`);let S=u(`rue:slot:anchor`);c(x,S),l(()=>{let e=_.description;s(()=>g(e,x,S))});let C=e(`span`,a);c(a,C),l(()=>{d(C,String(`badge badge-${_.tone}`))}),c(C,f(`cached`));let w=e(`label`,i);c(i,w),d(w,`form-control w-full`);let T=e(`div`,w);c(w,T),d(T,`label`);let E=e(`span`,T);c(T,E),d(E,`label-text`),c(E,f(`本地输入状态`));let D=e(`input`,w);c(w,D),d(D,`input input-bordered`),l(()=>{h(D,`placeholder`,String(`写点 ${_.title} 的内容`))});let O=e(`div`,i);c(i,O),d(O,`flex items-center gap-3`);let k=e(`button`,O);c(O,k),l(()=>{d(k,String(`btn btn-${_.tone}`))}),r(k,`click`,()=>{o.value+=1}),c(k,f(`本地计数 +1`));let A=e(`span`,O);c(O,A),d(A,`stat-value text-2xl`);let j=v(A);return c(A,j),l(()=>{m(j,o.value)}),n})},D={profile:e=>p(t=>{let n=o(),r=u(`rue:component:anchor`);return c(n,r),g(_(E,{name:`profile`,onEvent:e.onEvent}),n,r),n}),settings:e=>p(t=>{let n=o(),r=u(`rue:component:anchor`);return c(n,r),g(_(E,{name:`settings`,onEvent:e.onEvent}),n,r),n})},O=`import {
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
}`,k=()=>{let{activeTab:t,activeView:y,events:E,pushEvent:k}=b(`useSetup:0:0:dup1`,()=>i(()=>{let e=b(`ref:1:1`,()=>a(`preview`)),t=b(`ref:1:2`,()=>a(`profile`)),n=b(`ref:1:3`,()=>a([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{n.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...n.value].slice(0,8)}}}));return p(i=>{let a=o(),b=u(`rue:component:anchor`);return c(a,b),g(_(w,{children:p(()=>{let i=o(),a=e(`h1`,i);c(i,a),d(a,`text-5xl font-semibold mb-4 md:mb-4`),c(a,f(`onActivated 缓存生命周期`));let b=e(`div`,i);c(i,b),h(b,`role`,`tablist`),d(b,`tabs tabs-box`);let w=e(`button`,b);c(b,w),h(w,`role`,`tab`),l(()=>{d(w,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(w,`click`,()=>{t.value=`preview`}),c(w,f(`效果`));let A=e(`button`,b);c(b,A),h(A,`role`,`tab`),l(()=>{d(A,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(A,`click`,()=>{t.value=`code`}),c(A,f(`代码`));let j=e(`div`,i);c(i,j),d(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=u(`rue:slot:anchor`);c(j,M),l(()=>{let n=t.value===`code`?p(()=>{let t=o(),n=e(`div`,t);c(t,n),d(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);c(n,r),d(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:O});s(()=>g(e,r,i))}),t}):``;s(()=>g(n,j,M))}),c(j,f(` `));let N=u(`rue:slot:anchor`);return c(j,N),l(()=>{let i=t.value===`preview`?p(()=>{let t=o(),i=e(`div`,t);c(t,i),d(i,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let a=e(`div`,i);c(i,a),d(a,`space-y-4`);let h=e(`div`,a);c(a,h),d(h,`join`);let b=u(`rue:list:start`),C=u(`rue:list:end`);c(h,b),c(h,C);let w=new Map;l(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:h,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,n,i,a,f)=>{g(p(()=>{let n=o(),i=e(`button`,n);c(n,i),l(()=>{d(i,String(`btn join-item ${y.value===t?`btn-${T[t].tone}`:`btn-outline`}`))}),r(i,`click`,()=>{y.value=t});let a=u(`rue:slot:anchor`);return c(i,a),l(()=>{let e=T[t].title;s(()=>g(e,i,a))}),n}),n,i)}})});let O=u(`rue:component:anchor`);c(a,O),g(_(S,{children:_(n,{is:D[y.value],key:y.value,onEvent:k})}),a,O);let A=e(`aside`,i);c(i,A),d(A,`card bg-base-100 shadow`);let j=e(`div`,A);c(A,j),d(j,`card-body`);let M=e(`div`,j);c(j,M),d(M,`flex items-center justify-between gap-3`);let N=e(`h2`,M);c(M,N),d(N,`card-title`),c(N,f(`生命周期日志`));let P=e(`button`,M);c(M,P),d(P,`btn btn-sm btn-ghost`),r(P,`click`,()=>{E.value=[]}),c(P,f(`清空`));let F=e(`ul`,j);c(j,F),d(F,`timeline timeline-vertical`);let I=u(`rue:slot:anchor`);c(F,I),l(()=>{let t=E.value.length===0?p(()=>{let t=o(),n=e(`li`,t);return c(t,n),d(n,`text-sm opacity-60`),c(n,f(`暂无事件`)),t}):``;s(()=>g(t,F,I))}),c(F,f(` `));let L=u(`rue:list:start`),R=u(`rue:list:end`);c(F,L),c(F,R);let z=new Map;return l(()=>{z=x({items:E.value||[],getKey:(e,t)=>t,elements:z,parent:F,before:R,singleRoot:!0,start:L,renderItem:(t,n,r,i,a)=>{g(p(()=>{let n=o(),r=e(`li`,n);c(n,r);let i=u(`rue:slot:anchor`);c(r,i),l(()=>{let t=a>0?p(()=>{let t=o();return c(t,e(`hr`,t)),t}):``;s(()=>g(t,r,i))});let h=e(`div`,r);c(r,h),d(h,`timeline-start text-xs opacity-60`),c(h,f(`#`));let _=v(h);c(h,_),l(()=>{m(_,E.value.length-a)});let y=e(`div`,r);c(r,y),d(y,`timeline-middle`);let b=e(`div`,y);c(y,b),d(b,`badge badge-outline badge-sm`);let x=e(`div`,r);c(r,x),d(x,`timeline-end text-sm`);let S=v(x);c(x,S),l(()=>{m(S,t)});let C=u(`rue:slot:anchor`);return c(r,C),l(()=>{let t=a<E.value.length-1?p(()=>{let t=o();return c(t,e(`hr`,t)),t}):``;s(()=>g(t,r,C))}),n}),n,r)}})}),t}):``;s(()=>g(i,j,N))}),i})}),a,b),a})};export{k as default};