import{$ as e,$t as t,Gt as n,Ht as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,ht as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _,wt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as x}from"./Code-D5UqTwV6.js";import{r as S}from"./SidebarPlaygroundExample-D2vGHFCu.js";var C=typeof queueMicrotask==`function`?queueMicrotask:e=>Promise.resolve().then(e),w=`import { type DebuggerEvent, onRenderTracked, signal, useSetup } from '@rue-js/rue'

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
}`,T=(e,t)=>e.target===t.count?{id:++t.nextId,source:`count`,key:String(e.key),value:String(t.count.peek())}:e.target===t.title?{id:++t.nextId,source:`title`,key:String(e.key),value:t.title.peek()}:e.target===t.showDetails?{id:++t.nextId,source:`showDetails`,key:String(e.key),value:t.showDetails.peek()?`true`:`false`}:null,E=e=>{e.flushQueued||(e.flushQueued=!0,C(()=>{e.flushQueued=!1,e.isCapturing=!1;let t=e.pendingEntries.splice(0).reverse();t.length!==0&&e.events.set([...t,...e.events.peek()].slice(0,8))}))},D=()=>{let e=y(`signal:1:0`,()=>r(1)),t=y(`signal:1:1`,()=>r(`Rue Render Debugger`)),n=y(`signal:1:2`,()=>r(!0)),i=y(`signal:1:3`,()=>r(`preview`)),a=y(`signal:1:4`,()=>r([])),o;return o={activeTab:i,captureNextRender:()=>{o.isCapturing=!0},count:e,events:a,flushQueued:!1,isCapturing:!0,nextId:0,pendingEntries:[],showDetails:n,title:t},v(e=>{if(!o.isCapturing)return;let t=T(e,o);t&&(o.pendingEntries.push(t),E(o))}),o},O=()=>{let{state:r}=y(`useSetup:0:0`,()=>a(()=>({state:y(`useSetup:1:5`,()=>a(D))})));return d(a=>{let v=c(),y=e(`rue:component:anchor`);return o(v,y),p(h(S,{children:d(()=>{let a=c(),v=g(`h1`,a);o(a,v),_(v,`text-5xl font-semibold mb-4 md:mb-4`),o(v,f(`onRenderTracked 调试示例`));let y=g(`div`,a);o(a,y),s(y,`role`,`tablist`),_(y,`tabs tabs-box`);let S=g(`button`,y);o(y,S),s(S,`role`,`tab`),t(()=>{_(S,`tab ${r.activeTab.get()===`preview`?`tab-active`:``}`)}),i(S,`click`,()=>{r.captureNextRender(),r.activeTab.set(`preview`)}),o(S,f(`效果`));let C=g(`button`,y);o(y,C),s(C,`role`,`tab`),t(()=>{_(C,`tab ${r.activeTab.get()===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{r.activeTab.set(`code`)}),o(C,f(`代码`));let T=g(`div`,a);o(a,T),_(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);o(T,E),t(()=>{let i=r.activeTab.get()===`code`?d(()=>{let r=c(),i=g(`div`,r);o(r,i),_(i,`card bg-base-100 shadow overflow-auto`);let a=g(`div`,i);o(i,a),_(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=h(x,{className:`h-full`,lang:`tsx`,code:w});n(()=>p(e,a,s))}),r}):``;n(()=>p(i,T,E))}),o(T,f(` `));let D=e(`rue:slot:anchor`);return o(T,D),t(()=>{let a=r.activeTab.get()===`preview`?d(()=>{let a=c(),h=g(`div`,a);o(a,h),_(h,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]`);let v=g(`div`,h);o(h,v),_(v,`card bg-base-100 shadow`);let y=g(`div`,v);o(v,y),_(y,`card-body gap-5`);let x=g(`div`,y);o(y,x);let S=g(`p`,x);o(x,S),_(S,`text-sm text-base-content/60`),o(S,f(`当前标题`));let C=g(`h2`,x);o(x,C),_(C,`text-3xl font-semibold`);let w=e(`rue:slot:anchor`);o(C,w),t(()=>{let e=r.title.get();n(()=>p(e,C,w))});let T=g(`div`,y);o(y,T),_(T,`stats stats-vertical sm:stats-horizontal shadow bg-base-200`);let E=g(`div`,T);o(T,E),_(E,`stat`);let D=g(`div`,E);o(E,D),_(D,`stat-title`),o(D,f(`count`));let O=g(`div`,E);o(E,O),_(O,`stat-value`);let k=e(`rue:slot:anchor`);o(O,k),t(()=>{let e=r.count.get();n(()=>p(e,O,k))});let A=g(`div`,T);o(T,A),_(A,`stat`);let j=g(`div`,A);o(A,j),_(j,`stat-title`),o(j,f(`details`));let M=g(`div`,A);o(A,M),_(M,`stat-value text-xl`);let N=m(M);o(M,N),t(()=>{l(N,r.showDetails.get()?`visible`:`hidden`)});let P=e(`rue:slot:anchor`);o(y,P),t(()=>{let e=r.showDetails.get()?d(()=>{let e=c(),t=g(`p`,e);return o(e,t),_(t,`text-sm leading-6 text-base-content/70`),o(t,f(`这段内容读取了 title、count 和 showDetails。每一次渲染读取都会被 onRenderTracked 捕获，并显示在右侧事件流里。`)),e}):``;n(()=>p(e,y,P))});let F=g(`label`,y);o(y,F),_(F,`form-control w-full`);let I=g(`span`,F);o(F,I),_(I,`label-text mb-2`),o(I,f(`标题`));let L=g(`input`,F);o(F,L),_(L,`input input-bordered w-full`),t(()=>{u(L,r.title.get())}),i(L,`input`,e=>{r.captureNextRender(),r.title.set(e.target.value)});let R=g(`div`,y);o(y,R),_(R,`flex flex-wrap gap-2`);let z=g(`button`,R);o(R,z),_(z,`btn btn-primary`),i(z,`click`,()=>{r.captureNextRender(),r.count.set(r.count.peek()+1)}),o(z,f(`count +1`));let B=g(`button`,R);o(R,B),_(B,`btn btn-outline`),i(B,`click`,()=>{r.captureNextRender(),r.showDetails.set(!r.showDetails.peek())}),o(B,f(`切换详情`));let V=g(`button`,R);o(R,V),_(V,`btn btn-ghost`),i(V,`click`,()=>{r.events.set([])}),o(V,f(`清空事件`));let H=g(`div`,h);o(h,H),_(H,`card bg-base-100 shadow`);let U=g(`div`,H);o(H,U),_(U,`card-body`);let W=g(`h2`,U);o(U,W),_(W,`card-title`),o(W,f(`Tracked events`));let G=g(`div`,U);o(U,G),_(G,`space-y-2`);let K=e(`rue:slot:anchor`);o(G,K),t(()=>{let e=r.events.get().length===0?d(()=>{let e=c(),t=g(`div`,e);return o(e,t),_(t,`rounded-lg bg-base-200 p-4 text-sm text-base-content/60`),o(t,f(`组件首次渲染或与左侧预览交互后，这里会显示最近的依赖读取。`)),e}):``;n(()=>p(e,G,K))}),o(G,f(` `));let q=e(`rue:list:start`),J=e(`rue:list:end`);o(G,q),o(G,J);let Y=new Map;return t(()=>{Y=b({items:r.events.get()||[],getKey:(e,t)=>e.id,elements:Y,parent:G,before:J,singleRoot:!0,trackIndex:!1,start:q,renderItem:(r,i,a,u,h)=>{p(d(()=>{let i=c(),a=g(`div`,i);o(i,a),t(()=>{s(a,`key`,String(r.id))}),_(a,`rounded-lg border border-base-300 bg-base-200 p-3`);let u=g(`div`,a);o(a,u),_(u,`flex items-center justify-between gap-3`);let d=g(`span`,u);o(u,d),_(d,`font-mono text-sm`);let h=e(`rue:slot:anchor`);o(d,h),t(()=>{let e=r.source;n(()=>p(e,d,h))});let v=g(`span`,u);o(u,v),_(v,`badge badge-outline`);let y=e(`rue:slot:anchor`);o(v,y),t(()=>{let e=r.key;n(()=>p(e,v,y))});let b=g(`div`,a);o(a,b),_(b,`mt-1 truncate text-sm text-base-content/70`),o(b,f(`value: `));let x=m(b);return o(b,x),t(()=>{l(x,r.value)}),i}),i,a)}})}),a}):``;n(()=>p(a,T,D))}),a})}),v,y),v})};export{O as default};