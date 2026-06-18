import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,Z as o,at as s,et as c,ft as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g,xt as _,zt as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as x}from"./Code-CZqShVUj.js";import{r as S}from"./SidebarPlaygroundExample-5H7RL-T7.js";var C=typeof queueMicrotask==`function`?queueMicrotask:e=>Promise.resolve().then(e),w=`import { type DebuggerEvent, onRenderTracked, signal, useSetup } from '@rue-js/rue'

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
}`,T=(e,t)=>e.target===t.count?{id:++t.nextId,source:`count`,key:String(e.key),value:String(t.count.peek())}:e.target===t.title?{id:++t.nextId,source:`title`,key:String(e.key),value:t.title.peek()}:e.target===t.showDetails?{id:++t.nextId,source:`showDetails`,key:String(e.key),value:t.showDetails.peek()?`true`:`false`}:null,E=e=>{e.flushQueued||(e.flushQueued=!0,C(()=>{e.flushQueued=!1,e.isCapturing=!1;let t=e.pendingEntries.splice(0).reverse();t.length!==0&&e.events.set([...t,...e.events.peek()].slice(0,8))}))},D=()=>{let e=y(`signal:1:0`,()=>v(1)),t=y(`signal:1:1`,()=>v(`Rue Render Debugger`)),n=y(`signal:1:2`,()=>v(!0)),r=y(`signal:1:3`,()=>v(`preview`)),i=y(`signal:1:4`,()=>v([])),a;return a={activeTab:r,captureNextRender:()=>{a.isCapturing=!0},count:e,events:i,flushQueued:!1,isCapturing:!0,nextId:0,pendingEntries:[],showDetails:n,title:t},_(e=>{if(!a.isCapturing)return;let t=T(e,a);t&&(a.pendingEntries.push(t),E(a))}),a},O=()=>{let{state:_}=y(`useSetup:0:0`,()=>p(()=>({state:y(`useSetup:1:5`,()=>p(D))})));return u(p=>{let v=o(),y=i(`rue:component:anchor`);return n(v,y),m(g(S,{children:u(()=>{let p=o(),v=r(`h1`,p);n(p,v),h(v,`text-5xl font-semibold mb-4 md:mb-4`),n(v,e(`onRenderTracked 调试示例`));let y=r(`div`,p);n(p,y),s(y,`role`,`tablist`),h(y,`tabs tabs-box`);let S=r(`button`,y);n(y,S),s(S,`role`,`tab`),a(()=>{h(S,`tab ${_.activeTab.get()===`preview`?`tab-active`:``}`)}),f(S,`click`,()=>{_.captureNextRender(),_.activeTab.set(`preview`)}),n(S,e(`效果`));let C=r(`button`,y);n(y,C),s(C,`role`,`tab`),a(()=>{h(C,`tab ${_.activeTab.get()===`code`?`tab-active`:``}`)}),f(C,`click`,()=>{_.activeTab.set(`code`)}),n(C,e(`代码`));let T=r(`div`,p);n(p,T),h(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);n(T,E),a(()=>{let e=_.activeTab.get()===`code`?u(()=>{let e=o(),s=r(`div`,e);n(e,s),h(s,`card bg-base-100 shadow overflow-auto`);let c=r(`div`,s);n(s,c),h(c,`card-body p-0`);let l=i(`rue:component:anchor`);return n(c,l),a(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:w});t(()=>m(e,c,l))}),e}):``;t(()=>m(e,T,E))}),n(T,e(` `));let D=i(`rue:slot:anchor`);return n(T,D),a(()=>{let p=_.activeTab.get()===`preview`?u(()=>{let p=o(),g=r(`div`,p);n(p,g),h(g,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]`);let v=r(`div`,g);n(g,v),h(v,`card bg-base-100 shadow`);let y=r(`div`,v);n(v,y),h(y,`card-body gap-5`);let x=r(`div`,y);n(y,x);let S=r(`p`,x);n(x,S),h(S,`text-sm text-base-content/60`),n(S,e(`当前标题`));let C=r(`h2`,x);n(x,C),h(C,`text-3xl font-semibold`);let w=i(`rue:slot:anchor`);n(C,w),a(()=>{let e=_.title.get();t(()=>m(e,C,w))});let T=r(`div`,y);n(y,T),h(T,`stats stats-vertical sm:stats-horizontal shadow bg-base-200`);let E=r(`div`,T);n(T,E),h(E,`stat`);let D=r(`div`,E);n(E,D),h(D,`stat-title`),n(D,e(`count`));let O=r(`div`,E);n(E,O),h(O,`stat-value`);let k=i(`rue:slot:anchor`);n(O,k),a(()=>{let e=_.count.get();t(()=>m(e,O,k))});let A=r(`div`,T);n(T,A),h(A,`stat`);let j=r(`div`,A);n(A,j),h(j,`stat-title`),n(j,e(`details`));let M=r(`div`,A);n(A,M),h(M,`stat-value text-xl`);let N=c(M);n(M,N),a(()=>{d(N,_.showDetails.get()?`visible`:`hidden`)});let P=i(`rue:slot:anchor`);n(y,P),a(()=>{let i=_.showDetails.get()?u(()=>{let t=o(),i=r(`p`,t);return n(t,i),h(i,`text-sm leading-6 text-base-content/70`),n(i,e(`这段内容读取了 title、count 和 showDetails。每一次渲染读取都会被 onRenderTracked 捕获，并显示在右侧事件流里。`)),t}):``;t(()=>m(i,y,P))});let F=r(`label`,y);n(y,F),h(F,`form-control w-full`);let I=r(`span`,F);n(F,I),h(I,`label-text mb-2`),n(I,e(`标题`));let L=r(`input`,F);n(F,L),h(L,`input input-bordered w-full`),a(()=>{l(L,_.title.get())}),f(L,`input`,e=>{_.captureNextRender(),_.title.set(e.target.value)});let R=r(`div`,y);n(y,R),h(R,`flex flex-wrap gap-2`);let z=r(`button`,R);n(R,z),h(z,`btn btn-primary`),f(z,`click`,()=>{_.captureNextRender(),_.count.set(_.count.peek()+1)}),n(z,e(`count +1`));let B=r(`button`,R);n(R,B),h(B,`btn btn-outline`),f(B,`click`,()=>{_.captureNextRender(),_.showDetails.set(!_.showDetails.peek())}),n(B,e(`切换详情`));let V=r(`button`,R);n(R,V),h(V,`btn btn-ghost`),f(V,`click`,()=>{_.events.set([])}),n(V,e(`清空事件`));let H=r(`div`,g);n(g,H),h(H,`card bg-base-100 shadow`);let U=r(`div`,H);n(H,U),h(U,`card-body`);let W=r(`h2`,U);n(U,W),h(W,`card-title`),n(W,e(`Tracked events`));let G=r(`div`,U);n(U,G),h(G,`space-y-2`);let K=i(`rue:slot:anchor`);n(G,K),a(()=>{let i=_.events.get().length===0?u(()=>{let t=o(),i=r(`div`,t);return n(t,i),h(i,`rounded-lg bg-base-200 p-4 text-sm text-base-content/60`),n(i,e(`组件首次渲染或与左侧预览交互后，这里会显示最近的依赖读取。`)),t}):``;t(()=>m(i,G,K))}),n(G,e(` `));let q=i(`rue:list:start`),J=i(`rue:list:end`);n(G,q),n(G,J);let Y=new Map;return a(()=>{Y=b({items:_.events.get()||[],getKey:(e,t)=>e.id,elements:Y,parent:G,before:J,singleRoot:!0,trackIndex:!1,start:q,renderItem:(l,f,p,g,_)=>{m(u(()=>{let u=o(),f=r(`div`,u);n(u,f),a(()=>{s(f,`key`,String(l.id))}),h(f,`rounded-lg border border-base-300 bg-base-200 p-3`);let p=r(`div`,f);n(f,p),h(p,`flex items-center justify-between gap-3`);let g=r(`span`,p);n(p,g),h(g,`font-mono text-sm`);let _=i(`rue:slot:anchor`);n(g,_),a(()=>{let e=l.source;t(()=>m(e,g,_))});let v=r(`span`,p);n(p,v),h(v,`badge badge-outline`);let y=i(`rue:slot:anchor`);n(v,y),a(()=>{let e=l.key;t(()=>m(e,v,y))});let b=r(`div`,f);n(f,b),h(b,`mt-1 truncate text-sm text-base-content/70`),n(b,e(`value: `));let x=c(b);return n(b,x),a(()=>{d(x,l.value)}),u}),f,p)}})}),p}):``;t(()=>m(p,T,D))}),p})}),v,y),v})};export{O as default};