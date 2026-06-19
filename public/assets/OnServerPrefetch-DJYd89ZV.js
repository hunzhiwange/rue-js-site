import{$ as e,$t as t,Bt as n,Gt as r,O as i,X as a,Xt as o,Z as s,ct as c,et as l,ft as u,gt as d,l as f,nt as p,o as m,r as h,rt as g,t as _,tt as v,ut as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as x}from"./Code-D5UqTwV6.js";import{r as S}from"./SidebarPlaygroundExample-D2vGHFCu.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:e,title:r,body:l,loadedAt:m,runCount:_,applyResult:x}=b(`useSetup:0:0`,()=>o(()=>{let e=b(`ref:1:0`,()=>n(`idle`)),t=b(`ref:1:1`,()=>n(`等待预取`)),r=b(`ref:1:2`,()=>n(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),i=b(`ref:1:3`,()=>n(`-`)),a=b(`ref:1:4`,()=>n(0));return{status:e,title:t,body:r,loadedAt:i,runCount:a,applyResult:(n,o)=>{e.value=o,t.value=n.title,r.value=n.body,i.value=n.loadedAt,a.value+=1}}})),S=async()=>{e.value=`loading`,x(await T(),`server`)},C=async()=>{e.value=`loading`,x({...await T(),title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return i(S),h(async()=>{e.value===`idle`&&await C()}),f(n=>{let i=v(`div`,n);y(i,`card bg-base-100 shadow`);let o=v(`div`,i);s(i,o),y(o,`card-body gap-4`);let f=v(`div`,o);s(o,f),y(f,`flex flex-wrap items-center gap-3`);let h=v(`span`,f);s(f,h),t(()=>{y(h,`badge ${e.value===`server`?`badge-success`:e.value===`client`?`badge-warning`:`badge-ghost`}`)});let b=g(h);s(h,b),t(()=>{d(b,e.value===`loading`?`loading`:e.value===`server`?`server prefetch`:e.value===`client`?`client fallback`:`idle`)});let x=v(`span`,f);s(f,x),y(x,`text-sm opacity-70`),s(x,p(`运行次数：`));let C=g(x);s(x,C),t(()=>{d(C,_.value)});let w=v(`div`,o);s(o,w);let T=v(`h2`,w);s(w,T),y(T,`text-2xl font-semibold`);let E=g(T);s(T,E),t(()=>{d(E,r.value)});let D=v(`p`,w);s(w,D),y(D,`mt-2 text-base opacity-80`);let O=g(D);s(D,O),t(()=>{d(O,l.value)});let k=v(`dl`,o);s(o,k),y(k,`grid gap-3 sm:grid-cols-2`);let A=v(`div`,k);s(k,A),y(A,`rounded-box bg-base-200 p-4`);let j=v(`dt`,A);s(A,j),y(j,`text-sm opacity-70`),s(j,p(`数据来源`));let M=v(`dd`,A);s(A,M),y(M,`mt-1 font-mono`);let N=g(M);s(M,N),t(()=>{d(N,e.value)});let P=v(`div`,k);s(k,P),y(P,`rounded-box bg-base-200 p-4`);let F=v(`dt`,P);s(P,F),y(F,`text-sm opacity-70`),s(F,p(`加载时间`));let I=v(`dd`,P);s(P,I),y(I,`mt-1 font-mono`);let L=g(I);s(I,L),t(()=>{d(L,m.value)});let R=v(`div`,o);s(o,R),y(R,`flex flex-wrap gap-3`);let z=v(`button`,R);s(R,z),c(z,`type`,`button`),y(z,`btn btn-primary`),t(()=>{u(z,e.value===`loading`)}),a(z,`click`,()=>{S()}),s(z,p(`模拟 SSR 预取`));let B=v(`button`,R);return s(R,B),c(B,`type`,`button`),y(B,`btn`),t(()=>{u(B,e.value===`loading`)}),a(B,`click`,()=>{e.value=`idle`,r.value=`等待预取`,l.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,m.value=`-`}),s(B,p(`重置`)),i})},D=()=>{let{activeTab:i}=b(`useSetup:0:0:dup1`,()=>o(()=>({activeTab:b(`ref:1:5`,()=>n(`preview`))})));return f(n=>{let o=l(),u=e(`rue:component:anchor`);return s(o,u),m(_(S,{children:f(()=>{let n=l(),o=v(`h1`,n);s(n,o),y(o,`text-5xl font-semibold mb-4 md:mb-4`),s(o,p(`服务端预取 onServerPrefetch`));let u=v(`div`,n);s(n,u),c(u,`role`,`tablist`),y(u,`tabs tabs-box`);let d=v(`button`,u);s(u,d),c(d,`role`,`tab`),t(()=>{y(d,`tab ${i.value===`preview`?`tab-active`:``}`)}),a(d,`click`,()=>{i.value=`preview`}),s(d,p(`效果`));let h=v(`button`,u);s(u,h),c(h,`role`,`tab`),t(()=>{y(h,`tab ${i.value===`code`?`tab-active`:``}`)}),a(h,`click`,()=>{i.value=`code`}),s(h,p(`代码`));let g=v(`div`,n);s(n,g),y(g,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=e(`rue:slot:anchor`);s(g,b),t(()=>{let t=i.value===`preview`?f(()=>{let t=l(),n=e(`rue:component:anchor`);return s(t,n),m(_(E,{}),t,n),t}):``;r(()=>m(t,g,b))}),s(g,p(` `));let S=e(`rue:slot:anchor`);return s(g,S),t(()=>{let n=i.value===`code`?f(()=>{let n=l(),i=v(`div`,n);s(n,i),y(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let a=v(`div`,i);s(i,a),y(a,`card-body p-0`);let o=e(`rue:component:anchor`);return s(a,o),t(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});r(()=>m(e,a,o))}),n}):``;r(()=>m(n,g,S))}),n})}),o,u),o})};export{D as default};