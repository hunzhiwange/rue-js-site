import{Cn as e,Ct as t,Dt as n,Mt as r,S as i,Tt as a,dt as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,r as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

const fetchServerMessage = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return {
    title: '服务端数据已就绪',
    body: 'onServerPrefetch 会在 SSR renderer 渲染组件前完成。',
    loadedAt: new Date().toLocaleTimeString(),
  }
}

const Demo: FC = () => {
  const status = ref<'idle' | 'loading' | 'server' | 'client'>('idle')
  const title = ref('等待预取')
  const body = ref('SSR 期间会先等待 onServerPrefetch 返回的 Promise。')
  const loadedAt = ref('-')

  const applyResult = (result: Awaited<ReturnType<typeof fetchServerMessage>>, source: 'server' | 'client') => {
    status.value = source
    title.value = result.title
    body.value = result.body
    loadedAt.value = result.loadedAt
  }

  const loadFromServer = async () => {
    status.value = 'loading'
    applyResult(await fetchServerMessage(), 'server')
  }

  onServerPrefetch(loadFromServer)

  onMounted(async () => {
    if (status.value === 'idle') {
      status.value = 'loading'
      applyResult(await fetchServerMessage(), 'client')
    }
  })

  return (
    <section>
      <p>{title.value}</p>
      <p>{body.value}</p>
      <p>来源: {status.value}</p>
      <p>时间: {loadedAt.value}</p>
    </section>
  )
}

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:o,title:s,body:h,loadedAt:_,runCount:y,applyResult:x}=b(`useSetup:0:0`,()=>e(()=>{let e=b(`ref:1:0`,()=>d(`idle`)),t=b(`ref:1:1`,()=>d(`等待预取`)),n=b(`ref:1:2`,()=>d(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),r=b(`ref:1:3`,()=>d(`-`)),i=b(`ref:1:4`,()=>d(0));return{status:e,title:t,body:n,loadedAt:r,runCount:i,applyResult:(a,o)=>{e.value=o,t.value=a.title,n.value=a.body,r.value=a.loadedAt,i.value+=1}}})),S=async()=>{o.value=`loading`,x(await T(),`server`)},C=async()=>{o.value=`loading`;let e=await T();x({...e,title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return i(S),v(async()=>{o.value===`idle`&&await C()}),g(e=>{let i=f(`div`,e);a(i,`card bg-base-100 shadow`);let d=f(`div`,i);p(i,d),a(d,`card-body gap-4`);let g=f(`div`,d);p(d,g),a(g,`flex flex-wrap items-center gap-3`);let v=f(`span`,g);p(g,v),m(()=>{a(v,`badge ${o.value===`server`?`badge-success`:o.value===`client`?`badge-warning`:`badge-ghost`}`)});let b=c(v);p(v,b),m(()=>{r(b,o.value===`loading`?`loading`:o.value===`server`?`server prefetch`:o.value===`client`?`client fallback`:`idle`)});let x=f(`span`,g);p(g,x),a(x,`text-sm opacity-70`),p(x,l(`运行次数：`));let C=c(x);p(x,C),m(()=>{r(C,y.value)});let w=f(`div`,d);p(d,w);let T=f(`h2`,w);p(w,T),a(T,`text-2xl font-semibold`);let E=c(T);p(T,E),m(()=>{r(E,s.value)});let D=f(`p`,w);p(w,D),a(D,`mt-2 text-base opacity-80`);let O=c(D);p(D,O),m(()=>{r(O,h.value)});let k=f(`dl`,d);p(d,k),a(k,`grid gap-3 sm:grid-cols-2`);let A=f(`div`,k);p(k,A),a(A,`rounded-box bg-base-200 p-4`);let j=f(`dt`,A);p(A,j),a(j,`text-sm opacity-70`),p(j,l(`数据来源`));let M=f(`dd`,A);p(A,M),a(M,`mt-1 font-mono`);let N=c(M);p(M,N),m(()=>{r(N,o.value)});let P=f(`div`,k);p(k,P),a(P,`rounded-box bg-base-200 p-4`);let F=f(`dt`,P);p(P,F),a(F,`text-sm opacity-70`),p(F,l(`加载时间`));let I=f(`dd`,P);p(P,I),a(I,`mt-1 font-mono`);let L=c(I);p(I,L),m(()=>{r(L,_.value)});let R=f(`div`,d);p(d,R),a(R,`flex flex-wrap gap-3`);let z=f(`button`,R);p(R,z),t(z,`type`,`button`),a(z,`btn btn-primary`),m(()=>{n(z,o.value===`loading`)}),u(z,`click`,()=>{S()}),p(z,l(`模拟 SSR 预取`));let B=f(`button`,R);return p(R,B),t(B,`type`,`button`),a(B,`btn`),m(()=>{n(B,o.value===`loading`)}),u(B,`click`,()=>{o.value=`idle`,s.value=`等待预取`,h.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,_.value=`-`}),p(B,l(`重置`)),i})},D=()=>{let{activeTab:n}=b(`useSetup:0:0:dup1`,()=>e(()=>({activeTab:b(`ref:1:5`,()=>d(`preview`))})));return g(e=>{let r=s(),i=o(`rue:component:anchor`);return p(r,i),_(y(S,{children:g(()=>{let e=s(),r=f(`h1`,e);p(e,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),p(r,l(`服务端预取 onServerPrefetch`));let i=f(`div`,e);p(e,i),t(i,`role`,`tablist`),a(i,`tabs tabs-box`);let c=f(`button`,i);p(i,c),t(c,`role`,`tab`),m(()=>{a(c,`tab ${n.value===`preview`?`tab-active`:``}`)}),u(c,`click`,()=>{n.value=`preview`}),p(c,l(`效果`));let d=f(`button`,i);p(i,d),t(d,`role`,`tab`),m(()=>{a(d,`tab ${n.value===`code`?`tab-active`:``}`)}),u(d,`click`,()=>{n.value=`code`}),p(d,l(`代码`));let v=f(`div`,e);p(e,v),a(v,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=o(`rue:slot:anchor`);p(v,b),m(()=>{let e=n.value===`preview`?g(()=>{let e=s(),t=o(`rue:component:anchor`);return p(e,t),_(y(E,{}),e,t),e}):``;h(()=>_(e,v,b))}),p(v,l(` `));let S=o(`rue:slot:anchor`);return p(v,S),m(()=>{let e=n.value===`code`?g(()=>{let e=s(),t=f(`div`,e);p(e,t),a(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let n=f(`div`,t);p(t,n),a(n,`card-body p-0`);let r=o(`rue:component:anchor`);return p(n,r),m(()=>{let e=y(x,{className:`h-full`,lang:`tsx`,code:C});h(()=>_(e,n,r))}),e}):``;h(()=>_(e,v,S))}),e})}),r,i),r})};export{D as default};