import{$t as e,Ot as t,Q as n,Xt as r,Z as i,_t as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as x}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=typeof queueMicrotask==`function`?queueMicrotask:e=>Promise.resolve().then(e),w=`import { type DebuggerEvent, onRenderTracked, signal, useSetup } from '@rue-js/rue'

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
}`,T=(e,t)=>e.target===t.count?{id:++t.nextId,source:`count`,key:String(e.key),value:String(t.count.peek())}:e.target===t.title?{id:++t.nextId,source:`title`,key:String(e.key),value:t.title.peek()}:e.target===t.showDetails?{id:++t.nextId,source:`showDetails`,key:String(e.key),value:t.showDetails.peek()?`true`:`false`}:null,E=e=>{e.flushQueued||(e.flushQueued=!0,C(()=>{e.flushQueued=!1,e.isCapturing=!1;let t=e.pendingEntries.splice(0).reverse();t.length!==0&&e.events.set([...t,...e.events.peek()].slice(0,8))}))},D=()=>{let e=y(`signal:1:0`,()=>r(1)),n=y(`signal:1:1`,()=>r(`Rue Render Debugger`)),i=y(`signal:1:2`,()=>r(!0)),a=y(`signal:1:3`,()=>r(`preview`)),o=y(`signal:1:4`,()=>r([])),s;return s={activeTab:a,captureNextRender:()=>{s.isCapturing=!0},count:e,events:o,flushQueued:!1,isCapturing:!0,nextId:0,pendingEntries:[],showDetails:i,title:n},t(e=>{if(!s.isCapturing)return;let t=T(e,s);t&&(s.pendingEntries.push(t),E(s))}),s},O=()=>{let{state:t}=y(`useSetup:0:0`,()=>c(()=>({state:y(`useSetup:1:5`,()=>c(D))})));return u(r=>{let c=g(),y=s(`rue:component:anchor`);return n(c,y),p(h(S,{children:u(()=>{let r=g(),c=f(`h1`,r);n(r,c),o(c,`text-5xl font-semibold mb-4 md:mb-4`),n(c,m(`onRenderTracked 调试示例`));let y=f(`div`,r);n(r,y),d(y,`role`,`tablist`),o(y,`tabs tabs-box`);let S=f(`button`,y);n(y,S),d(S,`role`,`tab`),v(()=>{o(S,`tab ${t.activeTab.get()===`preview`?`tab-active`:``}`)}),i(S,`click`,()=>{t.captureNextRender(),t.activeTab.set(`preview`)}),n(S,m(`效果`));let C=f(`button`,y);n(y,C),d(C,`role`,`tab`),v(()=>{o(C,`tab ${t.activeTab.get()===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{t.activeTab.set(`code`)}),n(C,m(`代码`));let T=f(`div`,r);n(r,T),o(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);n(T,E),v(()=>{let r=t.activeTab.get()===`code`?u(()=>{let t=g(),r=f(`div`,t);n(t,r),o(r,`card bg-base-100 shadow overflow-auto`);let i=f(`div`,r);n(r,i),o(i,`card-body p-0`);let a=s(`rue:component:anchor`);return n(i,a),v(()=>{let t=h(x,{className:`h-full`,lang:`tsx`,code:w});e(()=>p(t,i,a))}),t}):``;e(()=>p(r,T,E))}),n(T,m(` `));let D=s(`rue:slot:anchor`);return n(T,D),v(()=>{let r=t.activeTab.get()===`preview`?u(()=>{let r=g(),c=f(`div`,r);n(r,c),o(c,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]`);let h=f(`div`,c);n(c,h),o(h,`card bg-base-100 shadow`);let y=f(`div`,h);n(h,y),o(y,`card-body gap-5`);let x=f(`div`,y);n(y,x);let S=f(`p`,x);n(x,S),o(S,`text-sm text-base-content/60`),n(S,m(`当前标题`));let C=f(`h2`,x);n(x,C),o(C,`text-3xl font-semibold`);let w=s(`rue:slot:anchor`);n(C,w),v(()=>{let n=t.title.get();e(()=>p(n,C,w))});let T=f(`div`,y);n(y,T),o(T,`stats stats-vertical sm:stats-horizontal shadow bg-base-200`);let E=f(`div`,T);n(T,E),o(E,`stat`);let D=f(`div`,E);n(E,D),o(D,`stat-title`),n(D,m(`count`));let O=f(`div`,E);n(E,O),o(O,`stat-value`);let k=s(`rue:slot:anchor`);n(O,k),v(()=>{let n=t.count.get();e(()=>p(n,O,k))});let A=f(`div`,T);n(T,A),o(A,`stat`);let j=f(`div`,A);n(A,j),o(j,`stat-title`),n(j,m(`details`));let M=f(`div`,A);n(A,M),o(M,`stat-value text-xl`);let N=l(M);n(M,N),v(()=>{_(N,t.showDetails.get()?`visible`:`hidden`)});let P=s(`rue:slot:anchor`);n(y,P),v(()=>{let r=t.showDetails.get()?u(()=>{let e=g(),t=f(`p`,e);return n(e,t),o(t,`text-sm leading-6 text-base-content/70`),n(t,m(`这段内容读取了 title、count 和 showDetails。每一次渲染读取都会被 onRenderTracked 捕获，并显示在右侧事件流里。`)),e}):``;e(()=>p(r,y,P))});let F=f(`label`,y);n(y,F),o(F,`form-control w-full`);let I=f(`span`,F);n(F,I),o(I,`label-text mb-2`),n(I,m(`标题`));let L=f(`input`,F);n(F,L),o(L,`input input-bordered w-full`),v(()=>{a(L,t.title.get())}),i(L,`input`,e=>{t.captureNextRender(),t.title.set(e.target.value)});let R=f(`div`,y);n(y,R),o(R,`flex flex-wrap gap-2`);let z=f(`button`,R);n(R,z),o(z,`btn btn-primary`),i(z,`click`,()=>{t.captureNextRender(),t.count.set(t.count.peek()+1)}),n(z,m(`count +1`));let B=f(`button`,R);n(R,B),o(B,`btn btn-outline`),i(B,`click`,()=>{t.captureNextRender(),t.showDetails.set(!t.showDetails.peek())}),n(B,m(`切换详情`));let V=f(`button`,R);n(R,V),o(V,`btn btn-ghost`),i(V,`click`,()=>{t.events.set([])}),n(V,m(`清空事件`));let H=f(`div`,c);n(c,H),o(H,`card bg-base-100 shadow`);let U=f(`div`,H);n(H,U),o(U,`card-body`);let W=f(`h2`,U);n(U,W),o(W,`card-title`),n(W,m(`Tracked events`));let G=f(`div`,U);n(U,G),o(G,`space-y-2`);let K=s(`rue:slot:anchor`);n(G,K),v(()=>{let r=t.events.get().length===0?u(()=>{let e=g(),t=f(`div`,e);return n(e,t),o(t,`rounded-lg bg-base-200 p-4 text-sm text-base-content/60`),n(t,m(`组件首次渲染或与左侧预览交互后，这里会显示最近的依赖读取。`)),e}):``;e(()=>p(r,G,K))}),n(G,m(` `));let q=s(`rue:list:start`),J=s(`rue:list:end`);n(G,q),n(G,J);let Y=new Map;return v(()=>{Y=b({items:t.events.get()||[],getKey:(e,t)=>e.id,elements:Y,parent:G,before:J,singleRoot:!0,trackIndex:!1,start:q,renderItem:(t,r,i,a,c)=>{p(u(()=>{let r=g(),i=f(`div`,r);n(r,i),v(()=>{d(i,`key`,String(t.id))}),o(i,`rounded-lg border border-base-300 bg-base-200 p-3`);let a=f(`div`,i);n(i,a),o(a,`flex items-center justify-between gap-3`);let c=f(`span`,a);n(a,c),o(c,`font-mono text-sm`);let u=s(`rue:slot:anchor`);n(c,u),v(()=>{let n=t.source;e(()=>p(n,c,u))});let h=f(`span`,a);n(a,h),o(h,`badge badge-outline`);let y=s(`rue:slot:anchor`);n(h,y),v(()=>{let n=t.key;e(()=>p(n,h,y))});let b=f(`div`,i);n(i,b),o(b,`mt-1 truncate text-sm text-base-content/70`),n(b,m(`value: `));let x=l(b);return n(b,x),v(()=>{_(x,t.value)}),r}),r,i)}})}),r}):``;e(()=>p(r,T,D))}),r})}),c,y),c})};export{O as default};