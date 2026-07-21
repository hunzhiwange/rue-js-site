import{Cn as e,Ct as t,Mt as n,Tt as r,Ut as i,dt as a,ft as o,hn as s,ht as c,jt as l,mt as u,ot as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=typeof queueMicrotask==`function`?queueMicrotask:e=>Promise.resolve().then(e),w=`import { type DebuggerEvent, onRenderTracked, signal, useSetup } from '@rue-js/rue'

const createState = () => {
  const count = signal(1)
  const title = signal('Rue Render Debugger')
  const showDetails = signal(true)
  const events = signal([])
  let capture = true
  let queued = false
  let pending = []

  onRenderTracked((event: DebuggerEvent) => {
    const source =
      event.target === count
        ? 'count'
        : event.target === title
          ? 'title'
          : event.target === showDetails
            ? 'showDetails'
            : null

    if (!capture || !source) {
      return
    }

    pending.push({ source, key: String(event.key) })
    if (!queued) {
      queued = true
      queueMicrotask(() => {
        queued = false
        capture = false
        events.set([...pending.reverse(), ...events.peek()].slice(0, 6))
        pending = []
      })
    }
  })

  return {
    count,
    title,
    showDetails,
    events,
    captureNextRender: () => {
      capture = true
    },
  }
}`,T=(e,t)=>e.target===t.count?{id:++t.nextId,source:`count`,key:String(e.key),value:String(t.count.peek())}:e.target===t.title?{id:++t.nextId,source:`title`,key:String(e.key),value:t.title.peek()}:e.target===t.showDetails?{id:++t.nextId,source:`showDetails`,key:String(e.key),value:t.showDetails.peek()?`true`:`false`}:null,E=e=>{e.flushQueued||(e.flushQueued=!0,C(()=>{e.flushQueued=!1,e.isCapturing=!1;let t=e.pendingEntries.splice(0).reverse();t.length!==0&&e.events.set([...t,...e.events.peek()].slice(0,8))}))},D=()=>{let e=y(`signal:1:0`,()=>s(1)),t=y(`signal:1:1`,()=>s(`Rue Render Debugger`)),n=y(`signal:1:2`,()=>s(!0)),r=y(`signal:1:3`,()=>s(`preview`)),a=y(`signal:1:4`,()=>s([])),o;return o={activeTab:r,captureNextRender:()=>{o.isCapturing=!0},count:e,events:a,flushQueued:!1,isCapturing:!0,nextId:0,pendingEntries:[],showDetails:n,title:t},i(e=>{if(!o.isCapturing)return;let t=T(e,o);t&&(o.pendingEntries.push(t),E(o))}),o},O=()=>{let{state:i}=y(`useSetup:0:0`,()=>e(()=>({state:y(`useSetup:1:5`,()=>e(D))})));return g(e=>{let s=o(),y=a(`rue:component:anchor`);return p(s,y),_(v(S,{children:g(()=>{let e=o(),s=f(`h1`,e);p(e,s),r(s,`text-5xl font-semibold mb-4 md:mb-4`),p(s,u(`onRenderTracked 调试示例`));let y=f(`div`,e);p(e,y),t(y,`role`,`tablist`),r(y,`tabs tabs-box`);let S=f(`button`,y);p(y,S),t(S,`role`,`tab`),m(()=>{r(S,`tab ${i.activeTab.get()===`preview`?`tab-active`:``}`)}),d(S,`click`,()=>{i.captureNextRender(),i.activeTab.set(`preview`)}),p(S,u(`效果`));let C=f(`button`,y);p(y,C),t(C,`role`,`tab`),m(()=>{r(C,`tab ${i.activeTab.get()===`code`?`tab-active`:``}`)}),d(C,`click`,()=>{i.activeTab.set(`code`)}),p(C,u(`代码`));let T=f(`div`,e);p(e,T),r(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);p(T,E),m(()=>{let e=i.activeTab.get()===`code`?g(()=>{let e=o(),t=f(`div`,e);p(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=f(`div`,t);p(t,n),r(n,`card-body p-0`);let i=a(`rue:component:anchor`);return p(n,i),m(()=>{let e=v(x,{className:`h-full`,lang:`tsx`,code:w});h(()=>_(e,n,i))}),e}):``;h(()=>_(e,T,E))}),p(T,u(` `));let D=a(`rue:slot:anchor`);return p(T,D),m(()=>{let e=i.activeTab.get()===`preview`?g(()=>{let e=o(),s=f(`div`,e);p(e,s),r(s,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]`);let v=f(`div`,s);p(s,v),r(v,`card bg-base-100 shadow`);let y=f(`div`,v);p(v,y),r(y,`card-body gap-5`);let x=f(`div`,y);p(y,x);let S=f(`p`,x);p(x,S),r(S,`text-sm text-base-content/60`),p(S,u(`当前标题`));let C=f(`h2`,x);p(x,C),r(C,`text-3xl font-semibold`);let w=a(`rue:slot:anchor`);p(C,w),m(()=>{let e=i.title.get();h(()=>_(e,C,w))});let T=f(`div`,y);p(y,T),r(T,`stats stats-vertical sm:stats-horizontal shadow bg-base-200`);let E=f(`div`,T);p(T,E),r(E,`stat`);let D=f(`div`,E);p(E,D),r(D,`stat-title`),p(D,u(`count`));let O=f(`div`,E);p(E,O),r(O,`stat-value`);let k=a(`rue:slot:anchor`);p(O,k),m(()=>{let e=i.count.get();h(()=>_(e,O,k))});let A=f(`div`,T);p(T,A),r(A,`stat`);let j=f(`div`,A);p(A,j),r(j,`stat-title`),p(j,u(`details`));let M=f(`div`,A);p(A,M),r(M,`stat-value text-xl`);let N=c(M);p(M,N),m(()=>{n(N,i.showDetails.get()?`visible`:`hidden`)});let P=a(`rue:slot:anchor`);p(y,P),m(()=>{let e=i.showDetails.get()?g(()=>{let e=o(),t=f(`p`,e);return p(e,t),r(t,`text-sm leading-6 text-base-content/70`),p(t,u(`这段内容读取了 title、count 和 showDetails。每一次渲染读取都会被 onRenderTracked 捕获，并显示在右侧事件流里。`)),e}):``;h(()=>_(e,y,P))});let F=f(`label`,y);p(y,F),r(F,`form-control w-full`);let I=f(`span`,F);p(F,I),r(I,`label-text mb-2`),p(I,u(`标题`));let L=f(`input`,F);p(F,L),r(L,`input input-bordered w-full`),m(()=>{l(L,i.title.get())}),d(L,`input`,e=>{i.captureNextRender(),i.title.set(e.target.value)});let R=f(`div`,y);p(y,R),r(R,`flex flex-wrap gap-2`);let z=f(`button`,R);p(R,z),r(z,`btn btn-primary`),d(z,`click`,()=>{i.captureNextRender(),i.count.set(i.count.peek()+1)}),p(z,u(`count +1`));let B=f(`button`,R);p(R,B),r(B,`btn btn-outline`),d(B,`click`,()=>{i.captureNextRender(),i.showDetails.set(!i.showDetails.peek())}),p(B,u(`切换详情`));let V=f(`button`,R);p(R,V),r(V,`btn btn-ghost`),d(V,`click`,()=>{i.events.set([])}),p(V,u(`清空事件`));let H=f(`div`,s);p(s,H),r(H,`card bg-base-100 shadow`);let U=f(`div`,H);p(H,U),r(U,`card-body`);let W=f(`h2`,U);p(U,W),r(W,`card-title`),p(W,u(`Tracked events`));let G=f(`div`,U);p(U,G),r(G,`space-y-2`);let K=a(`rue:slot:anchor`);p(G,K),m(()=>{let e=i.events.get().length===0?g(()=>{let e=o(),t=f(`div`,e);return p(e,t),r(t,`rounded-lg bg-base-200 p-4 text-sm text-base-content/60`),p(t,u(`组件首次渲染或与左侧预览交互后，这里会显示最近的依赖读取。`)),e}):``;h(()=>_(e,G,K))}),p(G,u(` `));let q=a(`rue:list:start`),J=a(`rue:list:end`);p(G,q),p(G,J);let Y=new Map;return m(()=>{Y=b({items:i.events.get()||[],getKey:(e,t)=>e.id,elements:Y,parent:G,before:J,singleRoot:!0,trackIndex:!1,start:q,renderItem:(e,i,s,l,d)=>{_(g(()=>{let i=o(),s=f(`div`,i);p(i,s),m(()=>{t(s,`key`,String(e.id))}),r(s,`rounded-lg border border-base-300 bg-base-200 p-3`);let l=f(`div`,s);p(s,l),r(l,`flex items-center justify-between gap-3`);let d=f(`span`,l);p(l,d),r(d,`font-mono text-sm`);let g=a(`rue:slot:anchor`);p(d,g),m(()=>{let t=e.source;h(()=>_(t,d,g))});let v=f(`span`,l);p(l,v),r(v,`badge badge-outline`);let y=a(`rue:slot:anchor`);p(v,y),m(()=>{let t=e.key;h(()=>_(t,v,y))});let b=f(`div`,s);p(s,b),r(b,`mt-1 truncate text-sm text-base-content/70`),p(b,u(`value: `));let x=c(b);return p(b,x),m(()=>{n(x,e.value)}),i}),i,s)}})}),e}):``;h(()=>_(e,T,D))}),e})}),s,y),s})};export{O as default};