import{$ as e,O as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,dt as c,et as l,ht as u,l as d,lt as f,nt as p,o as m,r as h,st as g,t as _,tt as v,zt as y}from"./vapor-runtime-CXIalONM.js";import{a as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as x}from"./Code-BIscIyEp.js";import{r as S}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:e,title:n,body:i,loadedAt:m,runCount:_,applyResult:x}=b(`useSetup:0:0`,()=>s(()=>{let e=b(`ref:1:0`,()=>y(`idle`)),t=b(`ref:1:1`,()=>y(`等待预取`)),n=b(`ref:1:2`,()=>y(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),r=b(`ref:1:3`,()=>y(`-`)),i=b(`ref:1:4`,()=>y(0));return{status:e,title:t,body:n,loadedAt:r,runCount:i,applyResult:(a,o)=>{e.value=o,t.value=a.title,n.value=a.body,r.value=a.loadedAt,i.value+=1}}})),S=async()=>{e.value=`loading`,x(await T(),`server`)},C=async()=>{e.value=`loading`,x({...await T(),title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return t(S),h(async()=>{e.value===`idle`&&await C()}),d(t=>{let s=l(`div`,t);f(s,`card bg-base-100 shadow`);let d=l(`div`,s);a(s,d),f(d,`card-body gap-4`);let h=l(`div`,d);a(d,h),f(h,`flex flex-wrap items-center gap-3`);let y=l(`span`,h);a(h,y),r(()=>{f(y,`badge ${e.value===`server`?`badge-success`:e.value===`client`?`badge-warning`:`badge-ghost`}`)});let b=p(y);a(y,b),r(()=>{u(b,e.value===`loading`?`loading`:e.value===`server`?`server prefetch`:e.value===`client`?`client fallback`:`idle`)});let x=l(`span`,h);a(h,x),f(x,`text-sm opacity-70`),a(x,v(`运行次数：`));let C=p(x);a(x,C),r(()=>{u(C,_.value)});let w=l(`div`,d);a(d,w);let T=l(`h2`,w);a(w,T),f(T,`text-2xl font-semibold`);let E=p(T);a(T,E),r(()=>{u(E,n.value)});let D=l(`p`,w);a(w,D),f(D,`mt-2 text-base opacity-80`);let O=p(D);a(D,O),r(()=>{u(O,i.value)});let k=l(`dl`,d);a(d,k),f(k,`grid gap-3 sm:grid-cols-2`);let A=l(`div`,k);a(k,A),f(A,`rounded-box bg-base-200 p-4`);let j=l(`dt`,A);a(A,j),f(j,`text-sm opacity-70`),a(j,v(`数据来源`));let M=l(`dd`,A);a(A,M),f(M,`mt-1 font-mono`);let N=p(M);a(M,N),r(()=>{u(N,e.value)});let P=l(`div`,k);a(k,P),f(P,`rounded-box bg-base-200 p-4`);let F=l(`dt`,P);a(P,F),f(F,`text-sm opacity-70`),a(F,v(`加载时间`));let I=l(`dd`,P);a(P,I),f(I,`mt-1 font-mono`);let L=p(I);a(I,L),r(()=>{u(L,m.value)});let R=l(`div`,d);a(d,R),f(R,`flex flex-wrap gap-3`);let z=l(`button`,R);a(R,z),g(z,`type`,`button`),f(z,`btn btn-primary`),r(()=>{c(z,e.value===`loading`)}),o(z,`click`,()=>{S()}),a(z,v(`模拟 SSR 预取`));let B=l(`button`,R);return a(R,B),g(B,`type`,`button`),f(B,`btn`),r(()=>{c(B,e.value===`loading`)}),o(B,`click`,()=>{e.value=`idle`,n.value=`等待预取`,i.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,m.value=`-`}),a(B,v(`重置`)),s})},D=()=>{let{activeTab:t}=b(`useSetup:0:0:dup1`,()=>s(()=>({activeTab:b(`ref:1:5`,()=>y(`preview`))})));return d(s=>{let c=e(),u=n(`rue:component:anchor`);return a(c,u),m(_(S,{children:d(()=>{let s=e(),c=l(`h1`,s);a(s,c),f(c,`text-5xl font-semibold mb-4 md:mb-4`),a(c,v(`服务端预取 onServerPrefetch`));let u=l(`div`,s);a(s,u),g(u,`role`,`tablist`),f(u,`tabs tabs-box`);let p=l(`button`,u);a(u,p),g(p,`role`,`tab`),r(()=>{f(p,`tab ${t.value===`preview`?`tab-active`:``}`)}),o(p,`click`,()=>{t.value=`preview`}),a(p,v(`效果`));let h=l(`button`,u);a(u,h),g(h,`role`,`tab`),r(()=>{f(h,`tab ${t.value===`code`?`tab-active`:``}`)}),o(h,`click`,()=>{t.value=`code`}),a(h,v(`代码`));let y=l(`div`,s);a(s,y),f(y,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=n(`rue:slot:anchor`);a(y,b),r(()=>{let r=t.value===`preview`?d(()=>{let t=e(),r=n(`rue:component:anchor`);return a(t,r),m(_(E,{}),t,r),t}):``;i(()=>m(r,y,b))}),a(y,v(` `));let S=n(`rue:slot:anchor`);return a(y,S),r(()=>{let o=t.value===`code`?d(()=>{let t=e(),o=l(`div`,t);a(t,o),f(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=l(`div`,o);a(o,s),f(s,`card-body p-0`);let c=n(`rue:component:anchor`);return a(s,c),r(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});i(()=>m(e,s,c))}),t}):``;i(()=>m(o,y,S))}),s})}),c,u),c})};export{D as default};