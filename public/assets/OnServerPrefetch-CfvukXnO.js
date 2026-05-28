import{$ as e,F as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,l as p,mt as m,o as h,ot as g,t as _,tt as v,ut as y}from"./vapor-runtime-BR_2rwNk.js";import{a as b}from"./vapor-helpers-vapor-DkadWylb.js";import{t as x}from"./Code-B_4lzH85.js";import{t as S}from"./SidebarPlaygroundExample-CtM-WHq_.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:a,title:o,body:l,loadedAt:p,runCount:_,applyResult:x,loadFromServer:S,loadFromClient:C}=b(`useSetup:0:0`,()=>r(()=>{let e=b(`ref:1:0`,()=>i(`idle`)),n=b(`ref:1:1`,()=>i(`等待预取`)),r=b(`ref:1:2`,()=>i(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),a=b(`ref:1:3`,()=>i(`-`)),o=b(`ref:1:4`,()=>i(0)),s=(t,i)=>{e.value=i,n.value=t.title,r.value=t.body,a.value=t.loadedAt,o.value+=1},c=async()=>{e.value=`loading`,s(await T(),`server`)},l=async()=>{e.value=`loading`,s({...await T(),title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return t(c),h(async()=>{e.value===`idle`&&await l()}),{status:e,title:n,body:r,loadedAt:a,runCount:o,applyResult:s,loadFromServer:c,loadFromClient:l}}));return d(t=>{let r=e(`div`,t);u(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-4`);let d=e(`div`,i);s(i,d),u(d,`flex flex-wrap items-center gap-3`);let h=e(`span`,d);s(d,h),c(()=>{u(h,String(`badge ${a.value===`server`?`badge-success`:a.value===`client`?`badge-warning`:`badge-ghost`}`))});let b=v(h);s(h,b),c(()=>{m(b,a.value===`loading`?`loading`:a.value===`server`?`server prefetch`:a.value===`client`?`client fallback`:`idle`)});let x=e(`span`,d);s(d,x),u(x,`text-sm opacity-70`),s(x,f(`运行次数：`));let C=v(x);s(x,C),c(()=>{m(C,_.value)});let w=e(`div`,i);s(i,w);let T=e(`h2`,w);s(w,T),u(T,`text-2xl font-semibold`);let E=v(T);s(T,E),c(()=>{m(E,o.value)});let D=e(`p`,w);s(w,D),u(D,`mt-2 text-base opacity-80`);let O=v(D);s(D,O),c(()=>{m(O,l.value)});let k=e(`dl`,i);s(i,k),u(k,`grid gap-3 sm:grid-cols-2`);let A=e(`div`,k);s(k,A),u(A,`rounded-box bg-base-200 p-4`);let j=e(`dt`,A);s(A,j),u(j,`text-sm opacity-70`),s(j,f(`数据来源`));let M=e(`dd`,A);s(A,M),u(M,`mt-1 font-mono`);let N=v(M);s(M,N),c(()=>{m(N,a.value)});let P=e(`div`,k);s(k,P),u(P,`rounded-box bg-base-200 p-4`);let F=e(`dt`,P);s(P,F),u(F,`text-sm opacity-70`),s(F,f(`加载时间`));let I=e(`dd`,P);s(P,I),u(I,`mt-1 font-mono`);let L=v(I);s(I,L),c(()=>{m(L,p.value)});let R=e(`div`,i);s(i,R),u(R,`flex flex-wrap gap-3`);let z=e(`button`,R);s(R,z),g(z,`type`,`button`),u(z,`btn btn-primary`),c(()=>{y(z,a.value===`loading`)}),n(z,`click`,()=>{S()}),s(z,f(`模拟 SSR 预取`));let B=e(`button`,R);return s(R,B),g(B,`type`,`button`),u(B,`btn`),c(()=>{y(B,a.value===`loading`)}),n(B,`click`,()=>{a.value=`idle`,o.value=`等待预取`,l.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,p.value=`-`}),s(B,f(`重置`)),r})},D=()=>{let{activeTab:t}=b(`useSetup:0:0:dup1`,()=>r(()=>({activeTab:b(`ref:1:5`,()=>i(`preview`))})));return d(r=>{let i=a(),m=l(`rue:component:anchor`);return s(i,m),p(_(S,{children:d(()=>{let r=a(),i=e(`h1`,r);s(r,i),u(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,f(`服务端预取`));let m=e(`div`,r);s(r,m),g(m,`role`,`tablist`),u(m,`tabs tabs-box`);let h=e(`button`,m);s(m,h),g(h,`role`,`tab`),c(()=>{u(h,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(h,`click`,()=>{t.value=`preview`}),s(h,f(`效果`));let v=e(`button`,m);s(m,v),g(v,`role`,`tab`),c(()=>{u(v,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(v,`click`,()=>{t.value=`code`}),s(v,f(`代码`));let y=e(`div`,r);s(r,y),u(y,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=l(`rue:slot:anchor`);s(y,b),c(()=>{let e=t.value===`preview`?d(()=>{let e=a(),t=l(`rue:component:anchor`);return s(e,t),p(_(E,{}),e,t),e}):``;o(()=>p(e,y,b))}),s(y,f(` `));let S=l(`rue:slot:anchor`);return s(y,S),c(()=>{let n=t.value===`code`?d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});o(()=>p(e,r,i))}),t}):``;o(()=>p(n,y,S))}),r})}),i,m),i})};export{D as default};