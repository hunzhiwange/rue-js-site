import{$ as e,Ct as t,Q as n,Qt as r,Vt as i,Wt as a,X as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,mt as p,nt as m,o as h,st as g,t as _,tt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as x}from"./Code-BIscIyEp.js";import{r as S}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=typeof queueMicrotask==`function`?queueMicrotask:e=>Promise.resolve().then(e),w=`import { type DebuggerEvent, onRenderTracked, signal, useSetup } from '@rue-js/rue'

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
}`,T=(e,t)=>e.target===t.count?{id:++t.nextId,source:`count`,key:String(e.key),value:String(t.count.peek())}:e.target===t.title?{id:++t.nextId,source:`title`,key:String(e.key),value:t.title.peek()}:e.target===t.showDetails?{id:++t.nextId,source:`showDetails`,key:String(e.key),value:t.showDetails.peek()?`true`:`false`}:null,E=e=>{e.flushQueued||(e.flushQueued=!0,C(()=>{e.flushQueued=!1,e.isCapturing=!1;let t=e.pendingEntries.splice(0).reverse();t.length!==0&&e.events.set([...t,...e.events.peek()].slice(0,8))}))},D=()=>{let e=y(`signal:1:0`,()=>i(1)),n=y(`signal:1:1`,()=>i(`Rue Render Debugger`)),r=y(`signal:1:2`,()=>i(!0)),a=y(`signal:1:3`,()=>i(`preview`)),o=y(`signal:1:4`,()=>i([])),s;return s={activeTab:a,captureNextRender:()=>{s.isCapturing=!0},count:e,events:o,flushQueued:!1,isCapturing:!0,nextId:0,pendingEntries:[],showDetails:r,title:n},t(e=>{if(!s.isCapturing)return;let t=T(e,s);t&&(s.pendingEntries.push(t),E(s))}),s},O=()=>{let{state:t}=y(`useSetup:0:0`,()=>c(()=>({state:y(`useSetup:1:5`,()=>c(D))})));return d(i=>{let c=e(),y=n(`rue:component:anchor`);return o(c,y),h(_(S,{children:d(()=>{let i=e(),c=l(`h1`,i);o(i,c),f(c,`text-5xl font-semibold mb-4 md:mb-4`),o(c,v(`onRenderTracked 调试示例`));let y=l(`div`,i);o(i,y),g(y,`role`,`tablist`),f(y,`tabs tabs-box`);let S=l(`button`,y);o(y,S),g(S,`role`,`tab`),r(()=>{f(S,`tab ${t.activeTab.get()===`preview`?`tab-active`:``}`)}),s(S,`click`,()=>{t.captureNextRender(),t.activeTab.set(`preview`)}),o(S,v(`效果`));let C=l(`button`,y);o(y,C),g(C,`role`,`tab`),r(()=>{f(C,`tab ${t.activeTab.get()===`code`?`tab-active`:``}`)}),s(C,`click`,()=>{t.activeTab.set(`code`)}),o(C,v(`代码`));let T=l(`div`,i);o(i,T),f(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=n(`rue:slot:anchor`);o(T,E),r(()=>{let i=t.activeTab.get()===`code`?d(()=>{let t=e(),i=l(`div`,t);o(t,i),f(i,`card bg-base-100 shadow overflow-auto`);let s=l(`div`,i);o(i,s),f(s,`card-body p-0`);let c=n(`rue:component:anchor`);return o(s,c),r(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:w});a(()=>h(e,s,c))}),t}):``;a(()=>h(i,T,E))}),o(T,v(` `));let D=n(`rue:slot:anchor`);return o(T,D),r(()=>{let i=t.activeTab.get()===`preview`?d(()=>{let i=e(),c=l(`div`,i);o(i,c),f(c,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]`);let _=l(`div`,c);o(c,_),f(_,`card bg-base-100 shadow`);let y=l(`div`,_);o(_,y),f(y,`card-body gap-5`);let x=l(`div`,y);o(y,x);let S=l(`p`,x);o(x,S),f(S,`text-sm text-base-content/60`),o(S,v(`当前标题`));let C=l(`h2`,x);o(x,C),f(C,`text-3xl font-semibold`);let w=n(`rue:slot:anchor`);o(C,w),r(()=>{let e=t.title.get();a(()=>h(e,C,w))});let T=l(`div`,y);o(y,T),f(T,`stats stats-vertical sm:stats-horizontal shadow bg-base-200`);let E=l(`div`,T);o(T,E),f(E,`stat`);let D=l(`div`,E);o(E,D),f(D,`stat-title`),o(D,v(`count`));let O=l(`div`,E);o(E,O),f(O,`stat-value`);let k=n(`rue:slot:anchor`);o(O,k),r(()=>{let e=t.count.get();a(()=>h(e,O,k))});let A=l(`div`,T);o(T,A),f(A,`stat`);let j=l(`div`,A);o(A,j),f(j,`stat-title`),o(j,v(`details`));let M=l(`div`,A);o(A,M),f(M,`stat-value text-xl`);let N=m(M);o(M,N),r(()=>{u(N,t.showDetails.get()?`visible`:`hidden`)});let P=n(`rue:slot:anchor`);o(y,P),r(()=>{let n=t.showDetails.get()?d(()=>{let t=e(),n=l(`p`,t);return o(t,n),f(n,`text-sm leading-6 text-base-content/70`),o(n,v(`这段内容读取了 title、count 和 showDetails。每一次渲染读取都会被 onRenderTracked 捕获，并显示在右侧事件流里。`)),t}):``;a(()=>h(n,y,P))});let F=l(`label`,y);o(y,F),f(F,`form-control w-full`);let I=l(`span`,F);o(F,I),f(I,`label-text mb-2`),o(I,v(`标题`));let L=l(`input`,F);o(F,L),f(L,`input input-bordered w-full`),r(()=>{p(L,t.title.get())}),s(L,`input`,e=>{t.captureNextRender(),t.title.set(e.target.value)});let R=l(`div`,y);o(y,R),f(R,`flex flex-wrap gap-2`);let z=l(`button`,R);o(R,z),f(z,`btn btn-primary`),s(z,`click`,()=>{t.captureNextRender(),t.count.set(t.count.peek()+1)}),o(z,v(`count +1`));let B=l(`button`,R);o(R,B),f(B,`btn btn-outline`),s(B,`click`,()=>{t.captureNextRender(),t.showDetails.set(!t.showDetails.peek())}),o(B,v(`切换详情`));let V=l(`button`,R);o(R,V),f(V,`btn btn-ghost`),s(V,`click`,()=>{t.events.set([])}),o(V,v(`清空事件`));let H=l(`div`,c);o(c,H),f(H,`card bg-base-100 shadow`);let U=l(`div`,H);o(H,U),f(U,`card-body`);let W=l(`h2`,U);o(U,W),f(W,`card-title`),o(W,v(`Tracked events`));let G=l(`div`,U);o(U,G),f(G,`space-y-2`);let K=n(`rue:slot:anchor`);o(G,K),r(()=>{let n=t.events.get().length===0?d(()=>{let t=e(),n=l(`div`,t);return o(t,n),f(n,`rounded-lg bg-base-200 p-4 text-sm text-base-content/60`),o(n,v(`组件首次渲染或与左侧预览交互后，这里会显示最近的依赖读取。`)),t}):``;a(()=>h(n,G,K))}),o(G,v(` `));let q=n(`rue:list:start`),J=n(`rue:list:end`);o(G,q),o(G,J);let Y=new Map;return r(()=>{Y=b({items:t.events.get()||[],getKey:(e,t)=>e.id,elements:Y,parent:G,before:J,singleRoot:!0,trackIndex:!1,start:q,renderItem:(t,i,s,c,p)=>{h(d(()=>{let i=e(),s=l(`div`,i);o(i,s),r(()=>{g(s,`key`,String(t.id))}),f(s,`rounded-lg border border-base-300 bg-base-200 p-3`);let c=l(`div`,s);o(s,c),f(c,`flex items-center justify-between gap-3`);let d=l(`span`,c);o(c,d),f(d,`font-mono text-sm`);let p=n(`rue:slot:anchor`);o(d,p),r(()=>{let e=t.source;a(()=>h(e,d,p))});let _=l(`span`,c);o(c,_),f(_,`badge badge-outline`);let y=n(`rue:slot:anchor`);o(_,y),r(()=>{let e=t.key;a(()=>h(e,_,y))});let b=l(`div`,s);o(s,b),f(b,`mt-1 truncate text-sm text-base-content/70`),o(b,v(`value: `));let x=m(b);return o(b,x),r(()=>{u(x,t.value)}),i}),i,s)}})}),i}):``;a(()=>h(i,T,D))}),i})}),c,y),c})};export{O as default};