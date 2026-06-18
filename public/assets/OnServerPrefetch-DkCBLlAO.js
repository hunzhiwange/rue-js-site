import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,i as u,k as d,l as f,lt as p,pt as m,q as h,qt as g,s as _,st as v,t as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as x}from"./Code-CZqShVUj.js";import{r as S}from"./SidebarPlaygroundExample-5H7RL-T7.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:t,title:a,body:s,loadedAt:_,runCount:y,applyResult:x}=b(`useSetup:0:0`,()=>g(()=>{let e=b(`ref:1:0`,()=>r(`idle`)),t=b(`ref:1:1`,()=>r(`等待预取`)),n=b(`ref:1:2`,()=>r(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),i=b(`ref:1:3`,()=>r(`-`)),a=b(`ref:1:4`,()=>r(0));return{status:e,title:t,body:n,loadedAt:i,runCount:a,applyResult:(r,o)=>{e.value=o,t.value=r.title,n.value=r.body,i.value=r.loadedAt,a.value+=1}}})),S=async()=>{t.value=`loading`,x(await T(),`server`)},C=async()=>{t.value=`loading`,x({...await T(),title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return d(S),u(async()=>{t.value===`idle`&&await C()}),f(r=>{let u=i(`div`,r);v(u,`card bg-base-100 shadow`);let d=i(`div`,u);n(u,d),v(d,`card-body gap-4`);let f=i(`div`,d);n(d,f),v(f,`flex flex-wrap items-center gap-3`);let g=i(`span`,f);n(f,g),o(()=>{v(g,`badge ${t.value===`server`?`badge-success`:t.value===`client`?`badge-warning`:`badge-ghost`}`)});let b=l(g);n(g,b),o(()=>{m(b,t.value===`loading`?`loading`:t.value===`server`?`server prefetch`:t.value===`client`?`client fallback`:`idle`)});let x=i(`span`,f);n(f,x),v(x,`text-sm opacity-70`),n(x,e(`运行次数：`));let C=l(x);n(x,C),o(()=>{m(C,y.value)});let w=i(`div`,d);n(d,w);let T=i(`h2`,w);n(w,T),v(T,`text-2xl font-semibold`);let E=l(T);n(T,E),o(()=>{m(E,a.value)});let D=i(`p`,w);n(w,D),v(D,`mt-2 text-base opacity-80`);let O=l(D);n(D,O),o(()=>{m(O,s.value)});let k=i(`dl`,d);n(d,k),v(k,`grid gap-3 sm:grid-cols-2`);let A=i(`div`,k);n(k,A),v(A,`rounded-box bg-base-200 p-4`);let j=i(`dt`,A);n(A,j),v(j,`text-sm opacity-70`),n(j,e(`数据来源`));let M=i(`dd`,A);n(A,M),v(M,`mt-1 font-mono`);let N=l(M);n(M,N),o(()=>{m(N,t.value)});let P=i(`div`,k);n(k,P),v(P,`rounded-box bg-base-200 p-4`);let F=i(`dt`,P);n(P,F),v(F,`text-sm opacity-70`),n(F,e(`加载时间`));let I=i(`dd`,P);n(P,I),v(I,`mt-1 font-mono`);let L=l(I);n(I,L),o(()=>{m(L,_.value)});let R=i(`div`,d);n(d,R),v(R,`flex flex-wrap gap-3`);let z=i(`button`,R);n(R,z),c(z,`type`,`button`),v(z,`btn btn-primary`),o(()=>{p(z,t.value===`loading`)}),h(z,`click`,()=>{S()}),n(z,e(`模拟 SSR 预取`));let B=i(`button`,R);return n(R,B),c(B,`type`,`button`),v(B,`btn`),o(()=>{p(B,t.value===`loading`)}),h(B,`click`,()=>{t.value=`idle`,a.value=`等待预取`,s.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,_.value=`-`}),n(B,e(`重置`)),u})},D=()=>{let{activeTab:l}=b(`useSetup:0:0:dup1`,()=>g(()=>({activeTab:b(`ref:1:5`,()=>r(`preview`))})));return f(r=>{let u=s(),d=a(`rue:component:anchor`);return n(u,d),_(y(S,{children:f(()=>{let r=s(),u=i(`h1`,r);n(r,u),v(u,`text-5xl font-semibold mb-4 md:mb-4`),n(u,e(`服务端预取 onServerPrefetch`));let d=i(`div`,r);n(r,d),c(d,`role`,`tablist`),v(d,`tabs tabs-box`);let p=i(`button`,d);n(d,p),c(p,`role`,`tab`),o(()=>{v(p,`tab ${l.value===`preview`?`tab-active`:``}`)}),h(p,`click`,()=>{l.value=`preview`}),n(p,e(`效果`));let m=i(`button`,d);n(d,m),c(m,`role`,`tab`),o(()=>{v(m,`tab ${l.value===`code`?`tab-active`:``}`)}),h(m,`click`,()=>{l.value=`code`}),n(m,e(`代码`));let g=i(`div`,r);n(r,g),v(g,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=a(`rue:slot:anchor`);n(g,b),o(()=>{let e=l.value===`preview`?f(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),_(y(E,{}),e,t),e}):``;t(()=>_(e,g,b))}),n(g,e(` `));let S=a(`rue:slot:anchor`);return n(g,S),o(()=>{let e=l.value===`code`?f(()=>{let e=s(),r=i(`div`,e);n(e,r),v(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let c=i(`div`,r);n(r,c),v(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=y(x,{className:`h-full`,lang:`tsx`,code:C});t(()=>_(e,c,l))}),e}):``;t(()=>_(e,g,S))}),r})}),u,d),u})};export{D as default};