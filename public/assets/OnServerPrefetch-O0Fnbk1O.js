import{D as e,F as t,P as n,Qt as r,Ut as i,V as a,Vt as o,Wt as s,dt as c,fn as l,gn as u,hn as d,in as f,mn as p,mt as m,nt as h,pn as g,sn as _,u as v,yn as y}from"./rue-runtime-BWbIfNT8.js";import{t as b}from"./Code-C5ZhIIr9.js";import{r as x}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var S=y(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3"><span><!--rue:text-hole:0--></span><span class="text-sm opacity-70">运行次数：<!--rue:text-hole:1--></span></div><div><h2 class="text-2xl font-semibold"><!--rue:text-hole:2--></h2><p class="mt-2 text-base opacity-80">rue:direct-text</p></div><dl class="grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">数据来源</dt><dd class="mt-1 font-mono"><!--rue:text-hole:4--></dd></div><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">加载时间</dt><dd class="mt-1 font-mono"><!--rue:text-hole:5--></dd></div></dl><div class="flex flex-wrap gap-3"><button type="button" class="btn btn-primary">模拟 SSR 预取</button><button type="button" class="btn">重置</button></div></div></div>`),C=y(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">服务端预取 onServerPrefetch</h1>`),w=y(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=y(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,D=e=>new Promise(t=>setTimeout(t,e)),O=async()=>(await D(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),k=(t,n,i)=>{let a=m(`idle`),o=m(`等待预取`),l=m(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`),d=m(`-`),p=m(0),y=(e,t)=>{a.value=t,o.value=e.title,l.value=e.body,d.value=e.loadedAt,p.value+=1},b=async()=>{a.value=`loading`,y(await O(),`server`)},x=async()=>{a.value=`loading`;let e=await O();y({...e,title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return e(b),c(async()=>{a.value===`idle`&&await x()}),h(()=>s(e=>{let t=S().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],i=t.childNodes[0].childNodes[3].childNodes[0],s=t.childNodes[0].childNodes[3].childNodes[1],c=t.childNodes[0].childNodes[0].childNodes[0].childNodes[0],m=c.parentNode,h=t.childNodes[0].childNodes[0].childNodes[1].childNodes[1],y=h.parentNode,x=t.childNodes[0].childNodes[1].childNodes[0].childNodes[0],C=x.parentNode,w=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0],T=w.parentNode,E=g(`rue:text-hole:3`);T.replaceChild(E,w);let D=t.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],O=D.parentNode,k=t.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],A=k.parentNode,j;f(()=>{let e=`badge ${a.value===`server`?`badge-success`:a.value===`client`?`badge-warning`:`badge-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,n.setAttribute(`class`,t))}),i.setAttribute(`type`,`button`),i.setAttribute(`class`,`btn btn-primary`);let M;f(()=>{let e=a.value===`loading`;Object.is(M,e)||(M=e,i.disabled=e)}),_(v(e,i,`click`,()=>()=>{b()})),s.setAttribute(`type`,`button`),s.setAttribute(`class`,`btn`);let N;f(()=>{let e=a.value===`loading`;Object.is(N,e)||(N=e,s.disabled=e)}),_(v(e,s,`click`,()=>()=>{a.value=`idle`,o.value=`等待预取`,l.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,d.value=`-`}));let P=u(``);m.insertBefore(P,c),m.removeChild(c),r(P,()=>a.value===`loading`?`loading`:a.value===`server`?`server prefetch`:a.value===`client`?`client fallback`:`idle`);let F=u(``);y.insertBefore(F,h),y.removeChild(h),r(F,()=>p.value);let I=u(``);C.insertBefore(I,x),C.removeChild(x),r(I,()=>o.value);let L=u(``);T.insertBefore(L,E),T.removeChild(E),r(L,()=>l.value);let R=u(``);O.insertBefore(R,D),O.removeChild(D),r(R,()=>a.value);let z=u(``);return A.insertBefore(z,k),A.removeChild(k),r(z,()=>d.value),[t,t]}))},A=(e,r,c)=>{let g=m(`preview`);return h(()=>n(x,()=>({children:(e,r,c)=>{let m=()=>s(e=>{let r=p();r.appendChild(C().content.cloneNode(!0));let o=w().content.cloneNode(!0),c=o.firstChild,m=c.childNodes[0],h=c.childNodes[1];r.appendChild(o),m.setAttribute(`role`,`tab`);let y;f(()=>{let e=`tab ${g.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(y,t)||(y=t,m.setAttribute(`class`,t))}),_(v(e,m,`click`,()=>()=>{g.value=`preview`})),h.setAttribute(`role`,`tab`);let x;f(()=>{let e=`tab ${g.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,h.setAttribute(`class`,t))}),_(v(e,h,`click`,()=>()=>{g.value=`code`}));let S=T().content.cloneNode(!0),D=S.firstChild,O=D.childNodes[0],A=O.parentNode,j=D.childNodes[1],M=j.parentNode;r.appendChild(S),i(A,O,()=>{let e=g.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(k,()=>({}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=p();return[t.firstChild,t.lastChild]})}}),i(M,j,()=>{let e=g.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let n=d(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=d(`div`,n);return l(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,b,()=>({className:`h-full`,lang:`tsx`,code:E})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=p();return[t.firstChild,t.lastChild]})}});let N=u(``),P=u(``);return r.insertBefore(N,r.firstChild),r.appendChild(P),[r.firstChild,r.lastChild]});return e==null?m():o(e,c,m)}})))};export{A as default};