import{Bt as e,Dn as t,Et as n,H as r,It as i,K as a,L as o,Lt as s,Mt as c,T as l,V as u,_n as d,bn as f,fn as p,gn as m,hn as h,nt as g,ot as _,q as v,wn as y,x as b,z as x}from"./rue-runtime-CwEGJ854.js";import{t as S}from"./Code-DUvGro8N.js";import{r as C}from"./SidebarPlaygroundExample-EGR0CyDT.js";var w=d(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3"><span><!--rue:text-hole:0--></span><span class="text-sm opacity-70">运行次数：<!--rue:text-hole:1--></span></div><div><h2 class="text-2xl font-semibold"><!--rue:text-hole:2--></h2><p class="mt-2 text-base opacity-80"><!--rue:text-hole:3--></p></div><dl class="grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">数据来源</dt><dd class="mt-1 font-mono"><!--rue:text-hole:4--></dd></div><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">加载时间</dt><dd class="mt-1 font-mono"><!--rue:text-hole:5--></dd></div></dl><div class="flex flex-wrap gap-3"><button type="button" class="btn btn-primary">模拟 SSR 预取</button><button type="button" class="btn">重置</button></div></div></div>`),T=d(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">服务端预取 onServerPrefetch</h1>`),E=d(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),D=d(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),O=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,k=e=>new Promise(t=>setTimeout(t,e)),A=async()=>(await k(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),j=()=>{let r=e(`idle`),a=e(`等待预取`),o=e(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`),s=e(`-`),u=e(0),d=(e,t)=>{r.value=t,a.value=e.title,o.value=e.body,s.value=e.loadedAt,u.value+=1},p=async()=>{r.value=`loading`,d(await A(),`server`)},h=async()=>{r.value=`loading`;let e=await A();d({...e,title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return l(p),i(async()=>{r.value===`idle`&&await h()}),c(()=>v(n(Object.assign(e=>{let n=w().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0].childNodes[0],c=n.childNodes[0].childNodes[3].childNodes[0],l=n.childNodes[0].childNodes[3].childNodes[1],d=n.childNodes[0].childNodes[0].childNodes[0].childNodes[0],h=d.parentNode,g=n.childNodes[0].childNodes[0].childNodes[1].childNodes[1],_=g.parentNode,v=n.childNodes[0].childNodes[1].childNodes[0].childNodes[0],b=v.parentNode,x=n.childNodes[0].childNodes[1].childNodes[1].childNodes[0],S=x.parentNode,C=n.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],T=C.parentNode,E=n.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],D=E.parentNode,O;y(()=>{let e=`badge ${r.value===`server`?`badge-success`:r.value===`client`?`badge-warning`:`badge-ghost`}`,t=e==null?``:String(e);Object.is(O,t)||(O=t,i.className=t)}),c.setAttribute(`type`,`button`),c.className=`btn btn-primary`;let k;y(()=>{let e=r.value===`loading`;Object.is(k,e)||(k=e,c.disabled=e)});let A=e=>{let t=()=>{p()};typeof t==`function`&&t(e)};c.addEventListener(`click`,A),t(()=>c.removeEventListener(`click`,A)),l.setAttribute(`type`,`button`),l.className=`btn`;let j;y(()=>{let e=r.value===`loading`;Object.is(j,e)||(j=e,l.disabled=e)});let M=e=>{let t=()=>{r.value=`idle`,a.value=`等待预取`,o.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,s.value=`-`};typeof t==`function`&&t(e)};l.addEventListener(`click`,M),t(()=>l.removeEventListener(`click`,M));let N=m(``);h.insertBefore(N,d),h.removeChild(d),f(N,()=>r.value===`loading`?`loading`:r.value===`server`?`server prefetch`:r.value===`client`?`client fallback`:`idle`);let P=m(``);_.insertBefore(P,g),_.removeChild(g),f(P,()=>u.value);let F=m(``);b.insertBefore(F,v),b.removeChild(v),f(F,()=>a.value);let I=m(``);S.insertBefore(I,x),S.removeChild(x),f(I,()=>o.value);let L=m(``);T.insertBefore(L,C),T.removeChild(C),f(L,()=>r.value);let R=m(``);return D.insertBefore(R,E),D.removeChild(E),f(R,()=>s.value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{})))},M=()=>{let t=e(`preview`);return c(()=>v(r(C,()=>({children:[(e,t,r)=>b(e,r,()=>n(Object.assign(e=>{let t=g();return t.appendChild(T().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,i)=>b(e,i,()=>n(Object.assign(e=>{let n=g(),r=E().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],c=i.childNodes[1];n.appendChild(r),_(a,`role`,`tab`),y(()=>{o(a,`tab ${t.value===`preview`?`tab-active`:``}`)});let l=e=>{let n=()=>{t.value=`preview`};typeof n==`function`&&n(e)};a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),_(c,`role`,`tab`),y(()=>{o(c,`tab ${t.value===`code`?`tab-active`:``}`)});let u=e=>{let n=()=>{t.value=`code`};typeof n==`function`&&n(e)};return c.addEventListener(`click`,u),s(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,i,o)=>b(e,o,()=>n(Object.assign(e=>{let i=g(),o=D().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],l=c.parentNode,d=s.childNodes[1],f=d.parentNode;return i.appendChild(o),u(l,c,()=>{let e=t.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>r(j,()=>({}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),u(f,d,()=>{let e=t.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=h(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`;let n=h(`div`,t);return p(t,n),n.className=`card-body p-0`,a(n,S,()=>({className:`h-full`,lang:`tsx`,code:O})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]})),e=>x(()=>{})))};export{M as default};