import{At as e,Q as t,Qt as n,Vt as r,Z as i,at as a,bt as o,dt as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _,yt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-C5NjdoiC.js";import{r as S}from"./SidebarPlaygroundExample-DpItFif-.js";var C=typeof queueMicrotask==`function`?queueMicrotask:e=>Promise.resolve().then(e),w=`import { type DebuggerEvent, onRenderTracked, signal, useSetup } from '@rue-js/rue'

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
}`,T=(e,t)=>e.target===t.count?{id:++t.nextId,source:`count`,key:String(e.key),value:String(t.count.peek())}:e.target===t.title?{id:++t.nextId,source:`title`,key:String(e.key),value:t.title.peek()}:e.target===t.showDetails?{id:++t.nextId,source:`showDetails`,key:String(e.key),value:t.showDetails.peek()?`true`:`false`}:null,E=e=>{e.flushQueued||(e.flushQueued=!0,C(()=>{e.flushQueued=!1,e.isCapturing=!1;let t=e.pendingEntries.splice(0).reverse();t.length!==0&&e.events.set([...t,...e.events.peek()].slice(0,8))}))},D=()=>{let t=y(`signal:1:0`,()=>n(1)),r=y(`signal:1:1`,()=>n(`Rue Render Debugger`)),i=y(`signal:1:2`,()=>n(!0)),a=y(`signal:1:3`,()=>n(`preview`)),o=y(`signal:1:4`,()=>n([])),s;return s={activeTab:a,captureNextRender:()=>{s.isCapturing=!0},count:t,events:o,flushQueued:!1,isCapturing:!0,nextId:0,pendingEntries:[],showDetails:i,title:r},e(e=>{if(!s.isCapturing)return;let t=T(e,s);t&&(s.pendingEntries.push(t),E(s))}),s},O=()=>{let{state:e}=y(`useSetup:0:0`,()=>f(()=>({state:y(`useSetup:1:5`,()=>f(D))})));return l(n=>{let f=u(),y=_(`rue:component:anchor`);return t(f,y),d(h(S,{children:l(()=>{let n=u(),f=m(`h1`,n);t(n,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,c(`onRenderTracked 调试示例`));let y=m(`div`,n);t(n,y),s(y,`role`,`tablist`),p(y,`tabs tabs-box`);let S=m(`button`,y);t(y,S),s(S,`role`,`tab`),r(()=>{p(S,`tab ${e.activeTab.get()===`preview`?`tab-active`:``}`)}),i(S,`click`,()=>{e.captureNextRender(),e.activeTab.set(`preview`)}),t(S,c(`效果`));let C=m(`button`,y);t(y,C),s(C,`role`,`tab`),r(()=>{p(C,`tab ${e.activeTab.get()===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{e.activeTab.set(`code`)}),t(C,c(`代码`));let T=m(`div`,n);t(n,T),p(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=_(`rue:slot:anchor`);t(T,E),r(()=>{let n=e.activeTab.get()===`code`?l(()=>{let e=u(),n=m(`div`,e);t(e,n),p(n,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,n);t(n,i),p(i,`card-body p-0`);let a=_(`rue:component:anchor`);return t(i,a),r(()=>{let e=h(x,{className:`h-full`,lang:`tsx`,code:w});g(()=>d(e,i,a))}),e}):``;g(()=>d(n,T,E))}),t(T,c(` `));let D=_(`rue:slot:anchor`);return t(T,D),r(()=>{let n=e.activeTab.get()===`preview`?l(()=>{let n=u(),f=m(`div`,n);t(n,f),p(f,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]`);let h=m(`div`,f);t(f,h),p(h,`card bg-base-100 shadow`);let y=m(`div`,h);t(h,y),p(y,`card-body gap-5`);let x=m(`div`,y);t(y,x);let S=m(`p`,x);t(x,S),p(S,`text-sm text-base-content/60`),t(S,c(`当前标题`));let C=m(`h2`,x);t(x,C),p(C,`text-3xl font-semibold`);let w=_(`rue:slot:anchor`);t(C,w),r(()=>{let t=e.title.get();g(()=>d(t,C,w))});let T=m(`div`,y);t(y,T),p(T,`stats stats-vertical sm:stats-horizontal shadow bg-base-200`);let E=m(`div`,T);t(T,E),p(E,`stat`);let D=m(`div`,E);t(E,D),p(D,`stat-title`),t(D,c(`count`));let O=m(`div`,E);t(E,O),p(O,`stat-value`);let k=_(`rue:slot:anchor`);t(O,k),r(()=>{let t=e.count.get();g(()=>d(t,O,k))});let A=m(`div`,T);t(T,A),p(A,`stat`);let j=m(`div`,A);t(A,j),p(j,`stat-title`),t(j,c(`details`));let M=m(`div`,A);t(A,M),p(M,`stat-value text-xl`);let N=a(M);t(M,N),r(()=>{o(N,e.showDetails.get()?`visible`:`hidden`)});let P=_(`rue:slot:anchor`);t(y,P),r(()=>{let n=e.showDetails.get()?l(()=>{let e=u(),n=m(`p`,e);return t(e,n),p(n,`text-sm leading-6 text-base-content/70`),t(n,c(`这段内容读取了 title、count 和 showDetails。每一次渲染读取都会被 onRenderTracked 捕获，并显示在右侧事件流里。`)),e}):``;g(()=>d(n,y,P))});let F=m(`label`,y);t(y,F),p(F,`form-control w-full`);let I=m(`span`,F);t(F,I),p(I,`label-text mb-2`),t(I,c(`标题`));let L=m(`input`,F);t(F,L),p(L,`input input-bordered w-full`),r(()=>{v(L,e.title.get())}),i(L,`input`,t=>{e.captureNextRender(),e.title.set(t.target.value)});let R=m(`div`,y);t(y,R),p(R,`flex flex-wrap gap-2`);let z=m(`button`,R);t(R,z),p(z,`btn btn-primary`),i(z,`click`,()=>{e.captureNextRender(),e.count.set(e.count.peek()+1)}),t(z,c(`count +1`));let B=m(`button`,R);t(R,B),p(B,`btn btn-outline`),i(B,`click`,()=>{e.captureNextRender(),e.showDetails.set(!e.showDetails.peek())}),t(B,c(`切换详情`));let V=m(`button`,R);t(R,V),p(V,`btn btn-ghost`),i(V,`click`,()=>{e.events.set([])}),t(V,c(`清空事件`));let H=m(`div`,f);t(f,H),p(H,`card bg-base-100 shadow`);let U=m(`div`,H);t(H,U),p(U,`card-body`);let W=m(`h2`,U);t(U,W),p(W,`card-title`),t(W,c(`Tracked events`));let G=m(`div`,U);t(U,G),p(G,`space-y-2`);let K=_(`rue:slot:anchor`);t(G,K),r(()=>{let n=e.events.get().length===0?l(()=>{let e=u(),n=m(`div`,e);return t(e,n),p(n,`rounded-lg bg-base-200 p-4 text-sm text-base-content/60`),t(n,c(`组件首次渲染或与左侧预览交互后，这里会显示最近的依赖读取。`)),e}):``;g(()=>d(n,G,K))}),t(G,c(` `));let q=_(`rue:list:start`),J=_(`rue:list:end`);t(G,q),t(G,J);let Y=new Map;return r(()=>{Y=b({items:e.events.get()||[],getKey:(e,t)=>e.id,elements:Y,parent:G,before:J,singleRoot:!0,trackIndex:!1,start:q,renderItem:(e,n,i,f,h)=>{d(l(()=>{let n=u(),i=m(`div`,n);t(n,i),r(()=>{s(i,`key`,String(e.id))}),p(i,`rounded-lg border border-base-300 bg-base-200 p-3`);let l=m(`div`,i);t(i,l),p(l,`flex items-center justify-between gap-3`);let f=m(`span`,l);t(l,f),p(f,`font-mono text-sm`);let h=_(`rue:slot:anchor`);t(f,h),r(()=>{let t=e.source;g(()=>d(t,f,h))});let v=m(`span`,l);t(l,v),p(v,`badge badge-outline`);let y=_(`rue:slot:anchor`);t(v,y),r(()=>{let t=e.key;g(()=>d(t,v,y))});let b=m(`div`,i);t(i,b),p(b,`mt-1 truncate text-sm text-base-content/70`),t(b,c(`value: `));let x=a(b);return t(b,x),r(()=>{o(x,e.value)}),n}),n,i)}})}),n}):``;g(()=>d(n,T,D))}),n})}),f,y),f})};export{O as default};