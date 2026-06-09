import{$ as e,A as t,Ht as n,J as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,i as d,l as f,mt as p,ot as m,qt as h,s as g,t as _,tt as v,ut as y}from"./vapor-runtime-aZAg0Qkw.js";import{a as b}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as x}from"./Code-5DOEyGxf.js";import{r as S}from"./SidebarPlaygroundExample-cASgDpH3.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:n,title:i,body:c,loadedAt:g,runCount:_,applyResult:x}=b(`useSetup:0:0`,()=>h(()=>{let e=b(`ref:1:0`,()=>a(`idle`)),t=b(`ref:1:1`,()=>a(`等待预取`)),n=b(`ref:1:2`,()=>a(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),r=b(`ref:1:3`,()=>a(`-`)),i=b(`ref:1:4`,()=>a(0));return{status:e,title:t,body:n,loadedAt:r,runCount:i,applyResult:(a,o)=>{e.value=o,t.value=a.title,n.value=a.body,r.value=a.loadedAt,i.value+=1}}})),S=async()=>{n.value=`loading`,x(await T(),`server`)},C=async()=>{n.value=`loading`,x({...await T(),title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return t(S),d(async()=>{n.value===`idle`&&await C()}),f(t=>{let a=e(`div`,t);l(a,`card bg-base-100 shadow`);let d=e(`div`,a);s(a,d),l(d,`card-body gap-4`);let f=e(`div`,d);s(d,f),l(f,`flex flex-wrap items-center gap-3`);let h=e(`span`,f);s(f,h),o(()=>{l(h,String(`badge ${n.value===`server`?`badge-success`:n.value===`client`?`badge-warning`:`badge-ghost`}`))});let b=v(h);s(h,b),o(()=>{p(b,n.value===`loading`?`loading`:n.value===`server`?`server prefetch`:n.value===`client`?`client fallback`:`idle`)});let x=e(`span`,f);s(f,x),l(x,`text-sm opacity-70`),s(x,u(`运行次数：`));let C=v(x);s(x,C),o(()=>{p(C,_.value)});let w=e(`div`,d);s(d,w);let T=e(`h2`,w);s(w,T),l(T,`text-2xl font-semibold`);let E=v(T);s(T,E),o(()=>{p(E,i.value)});let D=e(`p`,w);s(w,D),l(D,`mt-2 text-base opacity-80`);let O=v(D);s(D,O),o(()=>{p(O,c.value)});let k=e(`dl`,d);s(d,k),l(k,`grid gap-3 sm:grid-cols-2`);let A=e(`div`,k);s(k,A),l(A,`rounded-box bg-base-200 p-4`);let j=e(`dt`,A);s(A,j),l(j,`text-sm opacity-70`),s(j,u(`数据来源`));let M=e(`dd`,A);s(A,M),l(M,`mt-1 font-mono`);let N=v(M);s(M,N),o(()=>{p(N,n.value)});let P=e(`div`,k);s(k,P),l(P,`rounded-box bg-base-200 p-4`);let F=e(`dt`,P);s(P,F),l(F,`text-sm opacity-70`),s(F,u(`加载时间`));let I=e(`dd`,P);s(P,I),l(I,`mt-1 font-mono`);let L=v(I);s(I,L),o(()=>{p(L,g.value)});let R=e(`div`,d);s(d,R),l(R,`flex flex-wrap gap-3`);let z=e(`button`,R);s(R,z),m(z,`type`,`button`),l(z,`btn btn-primary`),o(()=>{y(z,n.value===`loading`)}),r(z,`click`,()=>{S()}),s(z,u(`模拟 SSR 预取`));let B=e(`button`,R);return s(R,B),m(B,`type`,`button`),l(B,`btn`),o(()=>{y(B,n.value===`loading`)}),r(B,`click`,()=>{n.value=`idle`,i.value=`等待预取`,c.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,g.value=`-`}),s(B,u(`重置`)),a})},D=()=>{let{activeTab:t}=b(`useSetup:0:0:dup1`,()=>h(()=>({activeTab:b(`ref:1:5`,()=>a(`preview`))})));return f(a=>{let d=i(),p=c(`rue:component:anchor`);return s(d,p),g(_(S,{children:f(()=>{let a=i(),d=e(`h1`,a);s(a,d),l(d,`text-5xl font-semibold mb-4 md:mb-4`),s(d,u(`服务端预取`));let p=e(`div`,a);s(a,p),m(p,`role`,`tablist`),l(p,`tabs tabs-box`);let h=e(`button`,p);s(p,h),m(h,`role`,`tab`),o(()=>{l(h,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(h,`click`,()=>{t.value=`preview`}),s(h,u(`效果`));let v=e(`button`,p);s(p,v),m(v,`role`,`tab`),o(()=>{l(v,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(v,`click`,()=>{t.value=`code`}),s(v,u(`代码`));let y=e(`div`,a);s(a,y),l(y,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=c(`rue:slot:anchor`);s(y,b),o(()=>{let e=t.value===`preview`?f(()=>{let e=i(),t=c(`rue:component:anchor`);return s(e,t),g(_(E,{}),e,t),e}):``;n(()=>g(e,y,b))}),s(y,u(` `));let S=c(`rue:slot:anchor`);return s(y,S),o(()=>{let r=t.value===`code`?f(()=>{let t=i(),r=e(`div`,t);s(t,r),l(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let a=e(`div`,r);s(r,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});n(()=>g(e,a,u))}),t}):``;n(()=>g(r,y,S))}),a})}),d,p),d})};export{D as default};