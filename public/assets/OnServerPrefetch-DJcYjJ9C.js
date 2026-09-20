import{D as e,H as t,Qt as n,Ut as r,V as i,Vt as a,Wt as o,Y as s,fn as c,gn as l,hn as u,in as d,it as f,mn as p,pn as m,sn as h,st as g,u as _,yn as v,yt as y}from"./rue-runtime-Cv6BZekS.js";import{t as b}from"./Code-BzFVdc3U.js";import{r as x}from"./SidebarPlaygroundExample-rFyhXfC_.js";var S=v(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-center gap-3"><span><!--rue:text-hole:0--></span><span class="text-sm opacity-70">运行次数：<!--rue:text-hole:1--></span></div><div><h2 class="text-2xl font-semibold"><!--rue:text-hole:2--></h2><p class="mt-2 text-base opacity-80">rue:direct-text</p></div><dl class="grid gap-3 sm:grid-cols-2"><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">数据来源</dt><dd class="mt-1 font-mono"><!--rue:text-hole:4--></dd></div><div class="rounded-box bg-base-200 p-4"><dt class="text-sm opacity-70">加载时间</dt><dd class="mt-1 font-mono"><!--rue:text-hole:5--></dd></div></dl><div class="flex flex-wrap gap-3"><button type="button" class="btn btn-primary">模拟 SSR 预取</button><button type="button" class="btn">重置</button></div></div></div>`),C=v(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">服务端预取 onServerPrefetch</h1>`),w=v(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=v(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=`import { type FC, onMounted, onServerPrefetch, ref } from '@rue-js/rue'

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

export default Demo`,D=e=>new Promise(t=>setTimeout(t,e)),O=async()=>(await D(500),{title:`服务端数据已就绪`,body:`onServerPrefetch 会在 SSR renderer 渲染组件前完成。`,loadedAt:new Date().toLocaleTimeString()}),k=(t,r,i)=>{let a=g(`idle`),c=g(`等待预取`),u=g(`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`),p=g(`-`),v=g(0),y=(e,t)=>{a.value=t,c.value=e.title,u.value=e.body,p.value=e.loadedAt,v.value+=1},b=async()=>{a.value=`loading`,y(await O(),`server`)},x=async()=>{a.value=`loading`;let e=await O();y({...e,title:`客户端补取完成`,body:`当前浏览器预览没有 SSR renderer，因此 mounted 后走客户端 fallback。`},`client`)};return e(b),f(async()=>{a.value===`idle`&&await x()}),s(()=>o(e=>{let t=S().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0].childNodes[0],i=t.childNodes[0].childNodes[3].childNodes[0],o=t.childNodes[0].childNodes[3].childNodes[1],s=t.childNodes[0].childNodes[0].childNodes[0].childNodes[0],f=s.parentNode,g=t.childNodes[0].childNodes[0].childNodes[1].childNodes[1],y=g.parentNode,x=t.childNodes[0].childNodes[1].childNodes[0].childNodes[0],C=x.parentNode,w=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0],T=w.parentNode,E=m(`rue:text-hole:3`);T.replaceChild(E,w);let D=t.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],O=D.parentNode,k=t.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],A=k.parentNode,j;d(()=>{let e=`badge ${a.value===`server`?`badge-success`:a.value===`client`?`badge-warning`:`badge-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,r.setAttribute(`class`,t))}),i.setAttribute(`type`,`button`),i.setAttribute(`class`,`btn btn-primary`);let M;d(()=>{let e=a.value===`loading`;Object.is(M,e)||(M=e,i.disabled=e)}),h(_(e,i,`click`,()=>()=>{b()})),o.setAttribute(`type`,`button`),o.setAttribute(`class`,`btn`);let N;d(()=>{let e=a.value===`loading`;Object.is(N,e)||(N=e,o.disabled=e)}),h(_(e,o,`click`,()=>()=>{a.value=`idle`,c.value=`等待预取`,u.value=`SSR 期间会先等待 onServerPrefetch 返回的 Promise。`,p.value=`-`}));let P=l(``);f.insertBefore(P,s),f.removeChild(s),n(P,()=>a.value===`loading`?`loading`:a.value===`server`?`server prefetch`:a.value===`client`?`client fallback`:`idle`);let F=l(``);y.insertBefore(F,g),y.removeChild(g),n(F,()=>v.value);let I=l(``);C.insertBefore(I,x),C.removeChild(x),n(I,()=>c.value);let L=l(``);T.insertBefore(L,E),T.removeChild(E),n(L,()=>u.value);let R=l(``);O.insertBefore(R,D),O.removeChild(D),n(R,()=>a.value);let z=l(``);return A.insertBefore(z,k),A.removeChild(k),n(z,()=>p.value),[t,t]}))},A=(e,n,f)=>{let m=g(`preview`);return s(()=>i(x,()=>({children:(e,n,s)=>{let f=()=>o(e=>{let n=p();n.appendChild(C().content.cloneNode(!0));let a=w().content.cloneNode(!0),s=a.firstChild,f=s.childNodes[0],g=s.childNodes[1];n.appendChild(a),f.setAttribute(`role`,`tab`);let v;d(()=>{let e=`tab ${m.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(v,t)||(v=t,f.setAttribute(`class`,t))}),h(_(e,f,`click`,()=>()=>{m.value=`preview`})),g.setAttribute(`role`,`tab`);let x;d(()=>{let e=`tab ${m.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,g.setAttribute(`class`,t))}),h(_(e,g,`click`,()=>()=>{m.value=`code`}));let S=T().content.cloneNode(!0),D=S.firstChild,O=D.childNodes[0],A=O.parentNode,j=D.childNodes[1],M=j.parentNode;n.appendChild(S),r(A,O,()=>{let e=m.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>i(k,()=>({}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>y(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>y(e=>{let t=p();return[t.firstChild,t.lastChild]})}}),r(M,j,()=>{let e=m.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=u(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=u(`div`,n);return c(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,b,()=>({className:`h-full`,lang:`tsx`,code:E})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>y(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>y(e=>{let t=p();return[t.firstChild,t.lastChild]})}});let N=l(``),P=l(``);return n.insertBefore(N,n.firstChild),n.appendChild(P),[n.firstChild,n.lastChild]});return e==null?f():a(e,s,f)}})))};export{A as default};