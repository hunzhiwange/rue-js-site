import{$ as e,E as t,G as n,Ht as r,J as i,Q as a,Rt as o,Xt as s,Y as c,Z as l,ct as u,et as d,l as f,mt as p,ot as m,qt as h,s as g,t as _,tt as v,w as y}from"./vapor-runtime-aZAg0Qkw.js";import{a as b,n as x}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as S}from"./KeepAlive-grJvTCPK.js";import{t as C}from"./Code-5DOEyGxf.js";import{r as w}from"./SidebarPlaygroundExample-cASgDpH3.js";var T={profile:{title:`资料面板`,tone:`primary`,description:`切走后输入框和本地计数会被 KeepAlive 保留。`},settings:{title:`设置面板`,tone:`secondary`,description:`再次切回来时会触发 onActivated，而不是重新创建组件。`}},E=n=>{let{clicks:a,meta:_}=b(`useSetup:0:0`,()=>h(()=>{let e=b(`ref:1:0`,()=>o(0)),r=T[n.name];return y(()=>{n.onEvent(`${r.title} onActivated`)}),t(()=>{n.onEvent(`${r.title} onDeactivated`)}),{clicks:e,meta:r}}));return f(t=>{let n=e(`section`,t);u(n,`card bg-base-100 shadow`);let o=e(`div`,n);c(n,o),u(o,`card-body gap-4`);let f=e(`div`,o);c(o,f),u(f,`flex items-center justify-between gap-4`);let h=e(`div`,f);c(f,h);let y=e(`h2`,h);c(h,y),u(y,`card-title`);let b=l(`rue:slot:anchor`);c(y,b),s(()=>{let e=_.title;r(()=>g(e,y,b))});let x=e(`p`,h);c(h,x),u(x,`text-sm opacity-70`);let S=l(`rue:slot:anchor`);c(x,S),s(()=>{let e=_.description;r(()=>g(e,x,S))});let C=e(`span`,f);c(f,C),s(()=>{u(C,String(`badge badge-${_.tone}`))}),c(C,d(`cached`));let w=e(`label`,o);c(o,w),u(w,`form-control w-full`);let T=e(`div`,w);c(w,T),u(T,`label`);let E=e(`span`,T);c(T,E),u(E,`label-text`),c(E,d(`本地输入状态`));let D=e(`input`,w);c(w,D),u(D,`input input-bordered`),s(()=>{m(D,`placeholder`,String(`写点 ${_.title} 的内容`))});let O=e(`div`,o);c(o,O),u(O,`flex items-center gap-3`);let k=e(`button`,O);c(O,k),s(()=>{u(k,String(`btn btn-${_.tone}`))}),i(k,`click`,()=>{a.value+=1}),c(k,d(`本地计数 +1`));let A=e(`span`,O);c(O,A),u(A,`stat-value text-2xl`);let j=v(A);return c(A,j),s(()=>{p(j,a.value)}),n})},D={profile:e=>f(t=>{let n=a(),r=l(`rue:component:anchor`);return c(n,r),g(_(E,{name:`profile`,onEvent:e.onEvent}),n,r),n}),settings:e=>f(t=>{let n=a(),r=l(`rue:component:anchor`);return c(n,r),g(_(E,{name:`settings`,onEvent:e.onEvent}),n,r),n})},O=`import {
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
}`,k=()=>{let{activeTab:t,activeView:y,events:E,pushEvent:k}=b(`useSetup:0:0:dup1`,()=>h(()=>{let e=b(`ref:1:1`,()=>o(`preview`)),t=b(`ref:1:2`,()=>o(`profile`)),n=b(`ref:1:3`,()=>o([]));return{activeTab:e,activeView:t,events:n,pushEvent:e=>{n.value=[`${new Date().toLocaleTimeString()} \xb7 ${e}`,...n.value].slice(0,8)}}}));return f(o=>{let h=a(),b=l(`rue:component:anchor`);return c(h,b),g(_(w,{children:f(()=>{let o=a(),h=e(`h1`,o);c(o,h),u(h,`text-5xl font-semibold mb-4 md:mb-4`),c(h,d(`onActivated 缓存生命周期`));let b=e(`div`,o);c(o,b),m(b,`role`,`tablist`),u(b,`tabs tabs-box`);let w=e(`button`,b);c(b,w),m(w,`role`,`tab`),s(()=>{u(w,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),i(w,`click`,()=>{t.value=`preview`}),c(w,d(`效果`));let A=e(`button`,b);c(b,A),m(A,`role`,`tab`),s(()=>{u(A,String(`tab ${t.value===`code`?`tab-active`:``}`))}),i(A,`click`,()=>{t.value=`code`}),c(A,d(`代码`));let j=e(`div`,o);c(o,j),u(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=l(`rue:slot:anchor`);c(j,M),s(()=>{let n=t.value===`code`?f(()=>{let t=a(),n=e(`div`,t);c(t,n),u(n,`card bg-base-100 shadow overflow-auto`);let i=e(`div`,n);c(n,i),u(i,`card-body p-0`);let o=l(`rue:component:anchor`);return c(i,o),s(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:O});r(()=>g(e,i,o))}),t}):``;r(()=>g(n,j,M))}),c(j,d(` `));let N=l(`rue:slot:anchor`);return c(j,N),s(()=>{let o=t.value===`preview`?f(()=>{let t=a(),o=e(`div`,t);c(t,o),u(o,`grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 items-start`);let m=e(`div`,o);c(o,m),u(m,`space-y-4`);let h=e(`div`,m);c(m,h),u(h,`join`);let b=l(`rue:list:start`),C=l(`rue:list:end`);c(h,b),c(h,C);let w=new Map;s(()=>{w=x({items:[`profile`,`settings`],getKey:(e,t)=>t,elements:w,parent:h,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,n,o,d,p)=>{g(f(()=>{let n=a(),o=e(`button`,n);c(n,o),s(()=>{u(o,String(`btn join-item ${y.value===t?`btn-${T[t].tone}`:`btn-outline`}`))}),i(o,`click`,()=>{y.value=t});let d=l(`rue:slot:anchor`);return c(o,d),s(()=>{let e=T[t].title;r(()=>g(e,o,d))}),n}),n,o)}})});let O=l(`rue:component:anchor`);c(m,O),g(_(S,{children:_(n,{is:D[y.value],key:y.value,onEvent:k})}),m,O);let A=e(`aside`,o);c(o,A),u(A,`card bg-base-100 shadow`);let j=e(`div`,A);c(A,j),u(j,`card-body`);let M=e(`div`,j);c(j,M),u(M,`flex items-center justify-between gap-3`);let N=e(`h2`,M);c(M,N),u(N,`card-title`),c(N,d(`生命周期日志`));let P=e(`button`,M);c(M,P),u(P,`btn btn-sm btn-ghost`),i(P,`click`,()=>{E.value=[]}),c(P,d(`清空`));let F=e(`ul`,j);c(j,F),u(F,`timeline timeline-vertical`);let I=l(`rue:slot:anchor`);c(F,I),s(()=>{let t=E.value.length===0?f(()=>{let t=a(),n=e(`li`,t);return c(t,n),u(n,`text-sm opacity-60`),c(n,d(`暂无事件`)),t}):``;r(()=>g(t,F,I))}),c(F,d(` `));let L=l(`rue:list:start`),R=l(`rue:list:end`);c(F,L),c(F,R);let z=new Map;return s(()=>{z=x({items:E.value||[],getKey:(e,t)=>t,elements:z,parent:F,before:R,singleRoot:!0,start:L,renderItem:(t,n,i,o,m)=>{g(f(()=>{let n=a(),i=e(`li`,n);c(n,i);let o=l(`rue:slot:anchor`);c(i,o),s(()=>{let t=m>0?f(()=>{let t=a();return c(t,e(`hr`,t)),t}):``;r(()=>g(t,i,o))});let h=e(`div`,i);c(i,h),u(h,`timeline-start text-xs opacity-60`),c(h,d(`#`));let _=v(h);c(h,_),s(()=>{p(_,E.value.length-m)});let y=e(`div`,i);c(i,y),u(y,`timeline-middle`);let b=e(`div`,y);c(y,b),u(b,`badge badge-outline badge-sm`);let x=e(`div`,i);c(i,x),u(x,`timeline-end text-sm`);let S=v(x);c(x,S),s(()=>{p(S,t)});let C=l(`rue:slot:anchor`);return c(i,C),s(()=>{let t=m<E.value.length-1?f(()=>{let t=a();return c(t,e(`hr`,t)),t}):``;r(()=>g(t,i,C))}),n}),n,i)}})}),t}):``;r(()=>g(o,j,N))}),o})}),h,b),h})};export{k as default};