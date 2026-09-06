import{Dn as e,E as t,O as n,Q as r,Qt as i,Vt as a,Zt as o,_n as s,_t as c,ct as l,et as u,gn as d,nt as f,pn as p,qt as m,rt as h,st as g,tn as _,vn as v,wn as y,xn as b,xt as x}from"./rue-runtime-HIMg8Lz8.js";import{t as S}from"./Code-DpH7u0gk.js";import{r as C}from"./SidebarPlaygroundExample-BCPRe0hA.js";var w=v(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3"><span><!--rue:text-hole:0--></span><span class="text-sm opacity-70">运行次数：<!--rue:text-hole:1--></span></div><div><h2 class="text-2xl font-semibold"><!--rue:text-hole:2--></h2><p class="mt-2 text-base opacity-80"><!--rue:text-hole:3--></p></div><dl class="grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">数据来源</dt><dd class="mt-1 font-mono"><!--rue:text-hole:4--></dd></div><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">加载时间</dt><dd class="mt-1 font-mono"><!--rue:text-hole:5--></dd></div></dl><div class="flex flex-wrap gap-3"><button type="button" class="btn btn-primary">模拟 SSR 预取</button><button type="button" class="btn">重置</button></div></div></div>`),T=v(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">服务端预取 onServerPrefetch</h1>`),E=v(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),D=v(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),O=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,k=e=>new Promise(t=>setTimeout(t,e)),A=async()=>(await k(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),j=()=>{let t=_(`idle`),r=_(`等待预取`),i=_(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`),c=_(`-`),d=_(0),f=(e,n)=>{t.value=n,r.value=e.title,i.value=e.body,c.value=e.loadedAt,d.value+=1},p=async()=>{t.value=`loading`,f(await A(),`server`)},h=async()=>{t.value=`loading`;let e=await A();f({...e,title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return n(p),o(async()=>{t.value===`idle`&&await h()}),m(()=>l(a(Object.assign(n=>{let a=w().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0].childNodes[0],l=a.childNodes[0].childNodes[3].childNodes[0],u=a.childNodes[0].childNodes[3].childNodes[1],f=a.childNodes[0].childNodes[0].childNodes[0].childNodes[0],m=f.parentNode,h=a.childNodes[0].childNodes[0].childNodes[1].childNodes[1],g=h.parentNode,_=a.childNodes[0].childNodes[1].childNodes[0].childNodes[0],v=_.parentNode,x=a.childNodes[0].childNodes[1].childNodes[1].childNodes[0],S=x.parentNode,C=a.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],T=C.parentNode,E=a.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],D=E.parentNode,O;y(()=>{let e=`badge ${t.value===`server`?`badge-success`:t.value===`client`?`badge-warning`:`badge-ghost`}`,n=e==null?``:String(e);Object.is(O,n)||(O=n,o.className=n)}),l.setAttribute(`type`,`button`),l.className=`btn btn-primary`;let k;y(()=>{let e=t.value===`loading`;Object.is(k,e)||(k=e,l.disabled=e)});let A=e=>{let t=()=>{p()};typeof t==`function`&&t(e)};l.addEventListener(`click`,A),e(()=>l.removeEventListener(`click`,A)),u.setAttribute(`type`,`button`),u.className=`btn`;let j;y(()=>{let e=t.value===`loading`;Object.is(j,e)||(j=e,u.disabled=e)});let M=e=>{let n=()=>{t.value=`idle`,r.value=`等待预取`,i.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,c.value=`-`};typeof n==`function`&&n(e)};u.addEventListener(`click`,M),e(()=>u.removeEventListener(`click`,M));let N=s(``);m.insertBefore(N,f),m.removeChild(f),b(N,()=>t.value===`loading`?`loading`:t.value===`server`?`server prefetch`:t.value===`client`?`client fallback`:`idle`);let P=s(``);g.insertBefore(P,h),g.removeChild(h),b(P,()=>d.value);let F=s(``);v.insertBefore(F,_),v.removeChild(_),b(F,()=>r.value);let I=s(``);S.insertBefore(I,x),S.removeChild(x),b(I,()=>i.value);let L=s(``);T.insertBefore(L,C),T.removeChild(C),b(L,()=>t.value);let R=s(``);return D.insertBefore(R,E),D.removeChild(E),b(R,()=>c.value),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{})))},M=()=>{let e=_(`preview`);return m(()=>l(h(C,()=>({children:[(e,n,r)=>t(e,r,()=>a(Object.assign(e=>{let t=c();return t.appendChild(T().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,o,s)=>t(n,s,()=>a(Object.assign(t=>{let n=c(),a=E().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],l=o.childNodes[1];n.appendChild(a),x(s,`role`,`tab`),y(()=>{r(s,`tab ${e.value===`preview`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};s.addEventListener(`click`,u),i(()=>s.removeEventListener(`click`,u)),x(l,`role`,`tab`),y(()=>{r(l,`tab ${e.value===`code`?`tab-active`:``}`)});let d=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return l.addEventListener(`click`,d),i(()=>l.removeEventListener(`click`,d)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(n,r,i)=>t(n,i,()=>a(Object.assign(t=>{let n=c(),r=D().content.cloneNode(!0),i=r.firstChild,o=i.childNodes[0],l=o.parentNode,u=i.childNodes[1],m=u.parentNode;return n.appendChild(r),f(l,o,()=>{let t=e.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>h(j,()=>({}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>a(Object.assign(e=>{let n=s(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),f(m,u,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=d(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`;let n=d(`div`,t);return p(t,n),n.className=`card-body p-0`,g(n,S,()=>({className:`h-full`,lang:`tsx`,code:O})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>a(Object.assign(e=>{let n=s(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>u(()=>{})))};export{M as default};