import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,k as c,l,lt as u,nt as d,o as f,pt as p,r as m,rt as h,t as g,tt as _,vt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as x}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:e,title:a,body:f,loadedAt:g,runCount:_,applyResult:x}=b(`useSetup:0:0`,()=>o(()=>{let e=b(`ref:1:0`,()=>t(`idle`)),n=b(`ref:1:1`,()=>t(`等待预取`)),r=b(`ref:1:2`,()=>t(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),i=b(`ref:1:3`,()=>t(`-`)),a=b(`ref:1:4`,()=>t(0));return{status:e,title:n,body:r,loadedAt:i,runCount:a,applyResult:(t,o)=>{e.value=o,n.value=t.title,r.value=t.body,i.value=t.loadedAt,a.value+=1}}})),S=async()=>{e.value=`loading`,x(await T(),`server`)},C=async()=>{e.value=`loading`,x({...await T(),title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return c(S),m(async()=>{e.value===`idle`&&await C()}),l(t=>{let o=d(`div`,t);i(o,`card bg-base-100 shadow`);let c=d(`div`,o);n(o,c),i(c,`card-body gap-4`);let l=d(`div`,c);n(c,l),i(l,`flex flex-wrap items-center gap-3`);let m=d(`span`,l);n(l,m),y(()=>{i(m,`badge ${e.value===`server`?`badge-success`:e.value===`client`?`badge-warning`:`badge-ghost`}`)});let b=s(m);n(m,b),y(()=>{v(b,e.value===`loading`?`loading`:e.value===`server`?`server prefetch`:e.value===`client`?`client fallback`:`idle`)});let x=d(`span`,l);n(l,x),i(x,`text-sm opacity-70`),n(x,h(`运行次数：`));let C=s(x);n(x,C),y(()=>{v(C,_.value)});let w=d(`div`,c);n(c,w);let T=d(`h2`,w);n(w,T),i(T,`text-2xl font-semibold`);let E=s(T);n(T,E),y(()=>{v(E,a.value)});let D=d(`p`,w);n(w,D),i(D,`mt-2 text-base opacity-80`);let O=s(D);n(D,O),y(()=>{v(O,f.value)});let k=d(`dl`,c);n(c,k),i(k,`grid gap-3 sm:grid-cols-2`);let A=d(`div`,k);n(k,A),i(A,`rounded-box bg-base-200 p-4`);let j=d(`dt`,A);n(A,j),i(j,`text-sm opacity-70`),n(j,h(`数据来源`));let M=d(`dd`,A);n(A,M),i(M,`mt-1 font-mono`);let N=s(M);n(M,N),y(()=>{v(N,e.value)});let P=d(`div`,k);n(k,P),i(P,`rounded-box bg-base-200 p-4`);let F=d(`dt`,P);n(P,F),i(F,`text-sm opacity-70`),n(F,h(`加载时间`));let I=d(`dd`,P);n(P,I),i(I,`mt-1 font-mono`);let L=s(I);n(I,L),y(()=>{v(L,g.value)});let R=d(`div`,c);n(c,R),i(R,`flex flex-wrap gap-3`);let z=d(`button`,R);n(R,z),u(z,`type`,`button`),i(z,`btn btn-primary`),y(()=>{p(z,e.value===`loading`)}),r(z,`click`,()=>{S()}),n(z,h(`模拟 SSR 预取`));let B=d(`button`,R);return n(R,B),u(B,`type`,`button`),i(B,`btn`),y(()=>{p(B,e.value===`loading`)}),r(B,`click`,()=>{e.value=`idle`,a.value=`等待预取`,f.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,g.value=`-`}),n(B,h(`重置`)),o})},D=()=>{let{activeTab:s}=b(`useSetup:0:0:dup1`,()=>o(()=>({activeTab:b(`ref:1:5`,()=>t(`preview`))})));return l(t=>{let o=_(),c=a(`rue:component:anchor`);return n(o,c),f(g(S,{children:l(()=>{let t=_(),o=d(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,h(`服务端预取 onServerPrefetch`));let c=d(`div`,t);n(t,c),u(c,`role`,`tablist`),i(c,`tabs tabs-box`);let p=d(`button`,c);n(c,p),u(p,`role`,`tab`),y(()=>{i(p,`tab ${s.value===`preview`?`tab-active`:``}`)}),r(p,`click`,()=>{s.value=`preview`}),n(p,h(`效果`));let m=d(`button`,c);n(c,m),u(m,`role`,`tab`),y(()=>{i(m,`tab ${s.value===`code`?`tab-active`:``}`)}),r(m,`click`,()=>{s.value=`code`}),n(m,h(`代码`));let v=d(`div`,t);n(t,v),i(v,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=a(`rue:slot:anchor`);n(v,b),y(()=>{let t=s.value===`preview`?l(()=>{let e=_(),t=a(`rue:component:anchor`);return n(e,t),f(g(E,{}),e,t),e}):``;e(()=>f(t,v,b))}),n(v,h(` `));let S=a(`rue:slot:anchor`);return n(v,S),y(()=>{let t=s.value===`code`?l(()=>{let t=_(),r=d(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let o=d(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),y(()=>{let t=g(x,{className:`h-full`,lang:`tsx`,code:C});e(()=>f(t,o,s))}),t}):``;e(()=>f(t,v,S))}),t})}),o,c),o})};export{D as default};