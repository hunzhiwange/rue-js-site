import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ht as s,it as c,k as l,l as u,nt as d,o as f,on as p,pt as m,r as h,rt as g,t as _,tn as v,tt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-C5NjdoiC.js";import{r as S}from"./SidebarPlaygroundExample-DpItFif-.js";var C=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,w=e=>new Promise(t=>setTimeout(t,e)),T=async()=>(await w(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),E=()=>{let{status:d,title:f,body:_,loadedAt:v,runCount:y,applyResult:x}=b(`useSetup:0:0`,()=>p(()=>{let e=b(`ref:1:0`,()=>n(`idle`)),t=b(`ref:1:1`,()=>n(`等待预取`)),r=b(`ref:1:2`,()=>n(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`)),i=b(`ref:1:3`,()=>n(`-`)),a=b(`ref:1:4`,()=>n(0));return{status:e,title:t,body:r,loadedAt:i,runCount:a,applyResult:(n,o)=>{e.value=o,t.value=n.title,r.value=n.body,i.value=n.loadedAt,a.value+=1}}})),S=async()=>{d.value=`loading`,x(await T(),`server`)},C=async()=>{d.value=`loading`,x({...await T(),title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return l(S),h(async()=>{d.value===`idle`&&await C()}),u(n=>{let l=g(`div`,n);m(l,`card bg-base-100 shadow`);let u=g(`div`,l);e(l,u),m(u,`card-body gap-4`);let p=g(`div`,u);e(u,p),m(p,`flex flex-wrap items-center gap-3`);let h=g(`span`,p);e(p,h),t(()=>{m(h,`badge ${d.value===`server`?`badge-success`:d.value===`client`?`badge-warning`:`badge-ghost`}`)});let b=i(h);e(h,b),t(()=>{a(b,d.value===`loading`?`loading`:d.value===`server`?`server prefetch`:d.value===`client`?`client fallback`:`idle`)});let x=g(`span`,p);e(p,x),m(x,`text-sm opacity-70`),e(x,c(`运行次数：`));let C=i(x);e(x,C),t(()=>{a(C,y.value)});let w=g(`div`,u);e(u,w);let T=g(`h2`,w);e(w,T),m(T,`text-2xl font-semibold`);let E=i(T);e(T,E),t(()=>{a(E,f.value)});let D=g(`p`,w);e(w,D),m(D,`mt-2 text-base opacity-80`);let O=i(D);e(D,O),t(()=>{a(O,_.value)});let k=g(`dl`,u);e(u,k),m(k,`grid gap-3 sm:grid-cols-2`);let A=g(`div`,k);e(k,A),m(A,`rounded-box bg-base-200 p-4`);let j=g(`dt`,A);e(A,j),m(j,`text-sm opacity-70`),e(j,c(`数据来源`));let M=g(`dd`,A);e(A,M),m(M,`mt-1 font-mono`);let N=i(M);e(M,N),t(()=>{a(N,d.value)});let P=g(`div`,k);e(k,P),m(P,`rounded-box bg-base-200 p-4`);let F=g(`dt`,P);e(P,F),m(F,`text-sm opacity-70`),e(F,c(`加载时间`));let I=g(`dd`,P);e(P,I),m(I,`mt-1 font-mono`);let L=i(I);e(I,L),t(()=>{a(L,v.value)});let R=g(`div`,u);e(u,R),m(R,`flex flex-wrap gap-3`);let z=g(`button`,R);e(R,z),o(z,`type`,`button`),m(z,`btn btn-primary`),t(()=>{s(z,d.value===`loading`)}),r(z,`click`,()=>{S()}),e(z,c(`模拟 SSR 预取`));let B=g(`button`,R);return e(R,B),o(B,`type`,`button`),m(B,`btn`),t(()=>{s(B,d.value===`loading`)}),r(B,`click`,()=>{d.value=`idle`,f.value=`等待预取`,_.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,v.value=`-`}),e(B,c(`重置`)),l})},D=()=>{let{activeTab:i}=b(`useSetup:0:0:dup1`,()=>p(()=>({activeTab:b(`ref:1:5`,()=>n(`preview`))})));return u(n=>{let a=d(),s=y(`rue:component:anchor`);return e(a,s),f(_(S,{children:u(()=>{let n=d(),a=g(`h1`,n);e(n,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),e(a,c(`服务端预取 onServerPrefetch`));let s=g(`div`,n);e(n,s),o(s,`role`,`tablist`),m(s,`tabs tabs-box`);let l=g(`button`,s);e(s,l),o(l,`role`,`tab`),t(()=>{m(l,`tab ${i.value===`preview`?`tab-active`:``}`)}),r(l,`click`,()=>{i.value=`preview`}),e(l,c(`效果`));let p=g(`button`,s);e(s,p),o(p,`role`,`tab`),t(()=>{m(p,`tab ${i.value===`code`?`tab-active`:``}`)}),r(p,`click`,()=>{i.value=`code`}),e(p,c(`代码`));let h=g(`div`,n);e(n,h),m(h,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=y(`rue:slot:anchor`);e(h,b),t(()=>{let t=i.value===`preview`?u(()=>{let t=d(),n=y(`rue:component:anchor`);return e(t,n),f(_(E,{}),t,n),t}):``;v(()=>f(t,h,b))}),e(h,c(` `));let S=y(`rue:slot:anchor`);return e(h,S),t(()=>{let n=i.value===`code`?u(()=>{let n=d(),r=g(`div`,n);e(n,r),m(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let i=g(`div`,r);e(r,i),m(i,`card-body p-0`);let a=y(`rue:component:anchor`);return e(i,a),t(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:C});v(()=>f(e,i,a))}),n}):``;v(()=>f(n,h,S))}),n})}),a,s),a})};export{D as default};