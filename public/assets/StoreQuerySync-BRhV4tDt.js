import{Bt as e,F as t,P as n,Qt as r,Ut as i,V as a,Vt as o,W as s,Wt as c,ct as l,dt as u,f as d,fn as f,ft as p,g as m,gn as h,h as g,hn as _,in as v,m as ee,mn as y,mt as b,nt as x,p as te,pn as S,qt as C,sn as w,tt as T,u as E,yn as D,yt as O,zt as k}from"./rue-runtime-BWbIfNT8.js";import{c as A,n as j}from"./rue-router-CYQ14Isv.js";import{t as M}from"./createHomeSplitExamplePage-Cjn7V321.js";import{a as N,i as P,n as F,o as I,r as L,s as R,t as z}from"./rue-store-C6kzZWLA.js";var ne=D(`<div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-start justify-between gap-3"><div class="space-y-2"><h2 class="text-2xl font-semibold">Store、Router、Query Sync 串联演示</h2><p class="max-w-3xl text-sm leading-6 text-base-content/75">搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。</p></div><div class="flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-base-200 px-3 py-1 font-medium">当前路由：<!--rue:text-hole:0--></span><span class="rounded-full bg-base-200 px-3 py-1 font-medium">预期 Query：<!--rue:text-hole:1--></span></div></div><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><button class="btn btn-sm btn-ghost">清空 Query</button><button class="btn btn-sm btn-ghost">清理所有 URL 参数</button></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><label class="form-control gap-2"><span class="label-text font-medium">搜索（debounce 500ms）</span><input class="input input-bordered" placeholder="例如：router / sync / render"></label><div class="grid gap-2"><span class="label-text font-medium">分类（throttle 180ms + push）</span><div class="flex flex-wrap gap-2"><!--rue:text-hole:5--></div><p class="text-xs leading-5 text-base-content/60"><!--rue:text-hole:6--></p></div><div class="grid gap-2"><span class="label-text font-medium">分页（throttle 180ms + push）</span><div class="flex items-center gap-2"><button class="btn btn-sm btn-outline">上一页</button><span class="min-w-24 text-center text-sm font-medium">第 <!--rue:text-hole:7--> / <!--rue:text-hole:8--> 页</span><button class="btn btn-sm btn-outline">下一页</button></div></div><div class="rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70"><p>本地状态会立刻刷新卡片列表。</p><p>地址栏会按 debounce 或 throttle 的规则延后追上。</p><p>上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。</p><p>下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。</p></div><div class="grid gap-2"><div class="flex flex-wrap items-center justify-between gap-2"><span class="label-text font-medium">URL 写入记录</span><span class="text-xs text-base-content/60">分类 / 分页走 pushState，搜索走 replaceState。</span></div><!--rue:text-hole:9--></div></div></div><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-col gap-3"><div><h3 class="text-xl font-semibold">筛选结果</h3><p class="text-sm text-base-content/70">共 <!--rue:text-hole:10--> 条，当前展示 <!--rue:text-hole:11--> 条。</p></div><div class="flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-base-200 px-3 py-1">search=<!--rue:text-hole:12--></span><span class="rounded-full bg-base-200 px-3 py-1">tab=<!--rue:text-hole:13--></span><span class="rounded-full bg-base-200 px-3 py-1">page=<!--rue:text-hole:14--></span></div></div><!--rue:text-hole:15--></div></div></div></div>`),B=3,V=6,H=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`编译锚点更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],re=[{id:`all`,label:`全部`,hint:`默认值不会写入 URL。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],U=0,ie=P(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),W=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},G=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},ae=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,K=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,G(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,G(t[2]??null))};let i=()=>{e(`popstate`,G())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},q=()=>{let e=F();e.use(z({stores:{"store-query-sync-demo":{q:{path:`search`,parser:I.withDefault(``),limitUrlUpdates:L(500)},tab:{parser:I.withDefault(`all`),history:`push`,limitUrlUpdates:R(180)},page:{parser:N.withDefault(1),history:`push`,limitUrlUpdates:R(180)}}}}));let t=ie(e),n=l(()=>{let e=t.normalizedSearch;return H.filter(n=>t.tab!==`all`&&n.tab!==t.tab?!1:!e||`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e))}),r=l(()=>Math.max(1,Math.ceil(n.get().length/B)));return{root:e,store:t,filteredItems:n,visibleItems:l(()=>{let e=(Math.min(Math.max(1,t.page),r.get())-1)*B;return n.get().slice(e,e+B)}),totalPages:r,clampEffect:O(()=>{let e=r.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)})}},J=(t,O,M)=>{let N=A(),P=T(`StoreQuerySyncDemo:hook:0`,q),F=b([]),I=b(null),L=(e,t)=>{U+=1,F.value=[{id:U,kind:e,href:t},...F.value].slice(0,V)};u(()=>{I.value=K(L)}),p(()=>{I.value?.(),P.clampEffect.dispose(),P.root.dispose()});let R=N.get()?.path||`/examples/store-query-sync`,z=l(()=>Math.min(Math.max(1,P.store.page),P.totalPages.get())),B=l(()=>W(P.store)),H=()=>{P.store.search=``,P.store.tab=`all`,P.store.page=1},ie=()=>{if(H(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)};return x(()=>c(t=>{let l=ne().content.cloneNode(!0).firstChild,u=l.childNodes[0].childNodes[0].childNodes[1].childNodes[3],p=l.childNodes[0].childNodes[0].childNodes[1].childNodes[4],b=l.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1],x=l.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],T=l.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[2],O=l.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],A=O.parentNode,M=l.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],N=M.parentNode,I=l.childNodes[0].childNodes[0].childNodes[1].childNodes[0],L=I.parentNode,V=l.childNodes[0].childNodes[0].childNodes[1].childNodes[1],U=V.parentNode,W=l.childNodes[0].childNodes[0].childNodes[1].childNodes[2],G=W.parentNode,K=l.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],q=K.parentNode,J=l.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0],Y=J.parentNode,X=l.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[1],oe=X.parentNode,se=l.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[3],ce=se.parentNode,le=l.childNodes[1].childNodes[0].childNodes[0].childNodes[4].childNodes[1],ue=le.parentNode,de=l.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1],fe=de.parentNode,pe=l.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[3],me=pe.parentNode,he=l.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],ge=he.parentNode,_e=l.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],ve=_e.parentNode,ye=l.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1],be=ye.parentNode,xe=l.childNodes[1].childNodes[1].childNodes[0].childNodes[1],Se=xe.parentNode;u.setAttribute(`class`,`btn btn-sm btn-ghost`);let Ce=e=>{let t=H;typeof t==`function`&&t(e)};u.addEventListener(`click`,Ce),w(()=>u.removeEventListener(`click`,Ce)),p.setAttribute(`class`,`btn btn-sm btn-ghost`);let we=e=>{let t=ie;typeof t==`function`&&t(e)};p.addEventListener(`click`,we),w(()=>p.removeEventListener(`click`,we)),b.setAttribute(`class`,`input input-bordered`);let Z;v(()=>{let e=P.store.search,t=e==null?``:String(e);Object.is(Z,t)||(Z=t,b.value=t)});let Te=e=>{let t=e=>{P.store.search=e.target.value,P.store.page=1};typeof t==`function`&&t(e)};b.addEventListener(`input`,Te),w(()=>b.removeEventListener(`input`,Te)),b.setAttribute(`placeholder`,`例如：router / sync / render`),x.setAttribute(`class`,`btn btn-sm btn-outline`);let Ee;v(()=>{let e=z.get()<=1;Object.is(Ee,e)||(Ee=e,x.disabled=e)}),w(E(t,x,`click`,()=>()=>{P.store.page=Math.max(1,z.get()-1)})),T.setAttribute(`class`,`btn btn-sm btn-outline`);let Q;v(()=>{let e=z.get()>=P.totalPages.get();Object.is(Q,e)||(Q=e,T.disabled=e)}),w(E(t,T,`click`,()=>()=>{P.store.page=Math.min(P.totalPages.get(),z.get()+1)})),e({parent:A,before:O},()=>k(R),()=>({})),e({parent:N,before:M},()=>k(B.get()),()=>({}));let De=(e,t,r)=>{let i=()=>n(j,()=>({className:`btn btn-sm btn-outline`,to:`${R}?q=router&tab=router&page=1`,children:(e,t,n)=>{let r=()=>a(e=>{let t=y();f(t,h(`Router 预设`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?i():o(e,r,i)},Oe=I.nextSibling;L.removeChild(I),e({parent:L,before:Oe},()=>De,()=>({}));let ke=(e,t,r)=>{let i=()=>n(j,()=>({className:`btn btn-sm btn-outline`,to:`${R}?q=sync&tab=store&page=1`,children:(e,t,n)=>{let r=()=>a(e=>{let t=y();f(t,h(`Store 预设`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?i():o(e,r,i)},Ae=V.nextSibling;U.removeChild(V),e({parent:U,before:Ae},()=>ke,()=>({}));let je=(e,t,r)=>{let i=()=>n(j,()=>({className:`btn btn-sm btn-outline`,to:`${R}?q=render&tab=runtime&page=1`,children:(e,t,n)=>{let r=()=>a(e=>{let t=y();f(t,h(`Runtime 预设`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?i():o(e,r,i)},Me=W.nextSibling;G.removeChild(W),e({parent:G,before:Me},()=>je,()=>({}));let $=[];return C(()=>{$=g(q,K,$,re||[],(e,t)=>e.id,(t,n)=>{let r=s(t);return te((t,n,i)=>{let a=()=>c(t=>{let n=_(`button`,t),i;v(()=>{let e=`btn btn-sm ${P.store.tab===r.get().id?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),w(E(t,n,`click`,()=>()=>{P.store.tab=r.get().id,P.store.page=1}));let a=S(`rue:compiled-slot`);return f(n,a),e({parent:n,before:a},()=>k(r.get().label),()=>({})),[n,n]});return t==null?a():o(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),w(()=>d($)),e({parent:Y,before:J},()=>k(re.find(e=>e.id===P.store.tab)?.hint),()=>({})),e({parent:oe,before:X},()=>k(z.get()),()=>({})),e({parent:ce,before:se},()=>k(P.totalPages.get()),()=>({})),i(ue,le,()=>F.value.length?{__rue_compiled_branch_key:!0,create:()=>c(t=>{let n=_(`ul`,t);n.setAttribute(`class`,`rounded-2xl border border-base-200 bg-base-100`);let i=S(`rue:list:end`);f(n,i);let a=[];return C(()=>{let t=F.value||[];a=g(i.parentNode,i,a,t,(e,t)=>e.id,(t,n)=>{let i=s(t);return te((t,n,a)=>{let s=()=>c(t=>{let n=_(`li`,t);n.setAttribute(`class`,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let a=_(`span`,n);f(n,a);let o;v(()=>{let e=`badge badge-sm ${i.get().kind===`push`?`badge-primary`:i.get().kind===`replace`?`badge-ghost`:`badge-outline`}`,t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,a.setAttribute(`class`,t))});let s=h(``);f(a,s),r(s,()=>ae(i.get().kind));let c=_(`span`,n);f(n,c),c.setAttribute(`class`,`font-mono text-xs text-base-content/70`);let l=S(`rue:compiled-slot`);return f(c,l),e({parent:c,before:l},()=>k(i.get().href),()=>({})),[n,n]});return t==null?s():o(t,a,s)},(e,r)=>{t=e,n=r,i.set(e)},void 0)},!1,!1)}),w(()=>d(a)),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=_(`div`,e);return t.setAttribute(`class`,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),f(t,h(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),[t,t]})}),e({parent:fe,before:de},()=>k(P.filteredItems.get().length),()=>({})),e({parent:me,before:pe},()=>k(P.visibleItems.get().length),()=>({})),e({parent:ge,before:he},()=>k(P.store.search||`(空)`),()=>({})),e({parent:ve,before:_e},()=>k(P.store.tab),()=>({})),e({parent:be,before:ye},()=>k(z.get()),()=>({})),i(Se,xe,()=>P.visibleItems.get().length?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=_(`div`,e);t.setAttribute(`class`,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let n=D(`<article class="rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4"><div class="mb-3 flex items-center justify-between gap-3"><span class="badge badge-outline">rue:row-text</span><span class="text-xs text-base-content/50">rue:row-text</span></div><h4 class="text-base font-semibold leading-6"><!--rue:text-hole:2--></h4><p class="mt-2 text-sm leading-6 text-base-content/70">rue:row-text</p></article>`),r=S(`rue:list:end`);f(t,r);let i=[];return C(()=>{let e=P.visibleItems.get()||[];i=m(r.parentNode,r,i,e,(e,t)=>e.id,(e,t,r)=>{let i=e,a;return ee(e=>{let t=n().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0].childNodes[0];r.parentNode;let o=t.childNodes[0].childNodes[1].childNodes[0];o.parentNode;let s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[2].childNodes[0];l.parentNode;let u=i.badge==null||typeof i.badge==`boolean`?``:String(i.badge);r.textContent=u;let d=i.id==null||typeof i.id==`boolean`?``:String(i.id);o.textContent=d;let f=h(``);c.insertBefore(f,s),c.removeChild(s);let p=i.title==null||typeof i.title==`boolean`?``:String(i.title);f.textContent=p;let m=i.teaser==null||typeof i.teaser==`boolean`?``:String(i.teaser);return l.textContent=m,a=()=>{{let e=i.badge==null||typeof i.badge==`boolean`?``:String(i.badge);Object.is(u,e)||(r.textContent=e,u=e)}{let e=i.id==null||typeof i.id==`boolean`?``:String(i.id);Object.is(d,e)||(o.textContent=e,d=e)}{let e=i.title==null||typeof i.title==`boolean`?``:String(i.title);Object.is(p,e)||(f.textContent=e,p=e)}{let e=i.teaser==null||typeof i.teaser==`boolean`?``:String(i.teaser);Object.is(m,e)||(l.textContent=e,m=e)}},[t,t]},(n,r)=>{e=n,t=r,i=n,a()},void 0,r)},!1,!0)}),w(()=>d(i)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=_(`div`,e);return t.setAttribute(`class`,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),f(t,h(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),[t,t]})}),[l,l]}))},Y=`import { RouterLink, useRoute } from '@rue-js/router'
import {
  createQuerySync,
  createStore,
  debounce,
  defineStore,
  parseAsInteger,
  parseAsString,
  throttle,
} from '@rue-js/store'
import { type FC, computed, onMounted, onUnmounted, ref, useSetup, watchEffect } from '@rue-js/rue'

type DemoTab = 'all' | 'router' | 'store' | 'runtime'
type DemoItem = {
  id: string
  title: string
  tab: Exclude<DemoTab, 'all'>
  teaser: string
  badge: string
}

type HistoryRecordKind = 'push' | 'replace' | 'popstate'
type HistoryRecord = {
  id: number
  kind: HistoryRecordKind
  href: string
}

const PAGE_SIZE = 3
const MAX_HISTORY_RECORDS = 6
const DEMO_ITEMS: DemoItem[] = [
  {
    id: 'router-history',
    title: 'Router 历史模式拆解',
    tab: 'router',
    teaser: '对比 Web History 与 Hash History 在路径同步上的差异。',
    badge: '路由',
  },
  {
    id: 'router-guards',
    title: '导航守卫与重定向',
    tab: 'router',
    teaser: '把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。',
    badge: '守卫',
  },
  {
    id: 'store-rue',
    title: 'defineStore 对象配置写法',
    tab: 'store',
    teaser: '使用 state、getters、actions 组织集中式状态。',
    badge: 'Store',
  },
  {
    id: 'store-query',
    title: 'Query Sync 字段映射',
    tab: 'store',
    teaser: '把 search、tab、page 精确映射到 URL 查询参数。',
    badge: 'URL',
  },
  {
    id: 'runtime-computed',
    title: 'computed 与 watchEffect 协作',
    tab: 'runtime',
    teaser: '用细粒度依赖追踪驱动视图与副作用。',
    badge: '响应式',
  },
  {
    id: 'runtime-render',
    title: '编译锚点更新链路',
    tab: 'runtime',
    teaser: '观察 block/renderable 在局部更新时的最小 DOM 变更。',
    badge: '渲染',
  },
]

const DEMO_TABS: Array<{ id: DemoTab; label: string; hint: string }> = [
  { id: 'all', label: '全部', hint: '默认值不会写入 URL。' },
  { id: 'router', label: 'Router', hint: '切换时走 throttle + history push。' },
  { id: 'store', label: 'Store', hint: '观察 defineStore 与 query sync 的配合。' },
  { id: 'runtime', label: 'Runtime', hint: '保持同一路径，只替换 search 状态。' },
]

let nextHistoryRecordId = 0

const useStoreQuerySyncDemoStore = defineStore('store-query-sync-demo', {
  state: () => ({
    search: '',
    tab: 'all' as DemoTab,
    page: 1,
  }),
  getters: {
    normalizedSearch(state: any) {
      return String(state.search || '')
        .trim()
        .toLowerCase()
    },
  },
})

const buildExpectedQuery = (store: any) => {
  const params = new URLSearchParams()
  const search = String(store.search || '').trim()
  if (search) {
    params.set('q', search)
  }
  if (store.tab !== 'all') {
    params.set('tab', store.tab)
  }
  if (store.page !== 1) {
    params.set('page', String(store.page))
  }
  const query = params.toString()
  return query ? \`?\${query}\` : '(空)'
}

const buildRecordedHref = (input?: string | URL | null) => {
  if (typeof window === 'undefined') {
    return String(input || '')
  }

  if (!input) {
    return \`\${window.location.pathname}\${window.location.search}\${window.location.hash}\`
  }

  const nextUrl = input instanceof URL ? input : new URL(String(input), window.location.href)
  return \`\${nextUrl.pathname}\${nextUrl.search}\${nextUrl.hash}\`
}

const getHistoryRecordLabel = (kind: HistoryRecordKind) => {
  if (kind === 'push') {
    return 'pushState'
  }

  if (kind === 'replace') {
    return 'replaceState'
  }

  return 'popstate'
}

const installHistoryRecorder = (appendRecord: (kind: HistoryRecordKind, href: string) => void) => {
  if (typeof window === 'undefined' || !window.history) {
    return () => {}
  }

  const historyApi = window.history
  const originalPushState = historyApi.pushState.bind(historyApi)
  const originalReplaceState = historyApi.replaceState.bind(historyApi)

  historyApi.pushState = ((...args: Parameters<History['pushState']>) => {
    originalPushState(...args)
    appendRecord('push', buildRecordedHref(args[2] ?? null))
  }) as History['pushState']

  historyApi.replaceState = ((...args: Parameters<History['replaceState']>) => {
    originalReplaceState(...args)
    appendRecord('replace', buildRecordedHref(args[2] ?? null))
  }) as History['replaceState']

  const handlePopState = () => {
    appendRecord('popstate', buildRecordedHref())
  }

  window.addEventListener('popstate', handlePopState)

  return () => {
    historyApi.pushState = originalPushState
    historyApi.replaceState = originalReplaceState
    window.removeEventListener('popstate', handlePopState)
  }
}

const createDemoState = () => {
  const root = createStore()
  root.use(
    createQuerySync({
      stores: {
        'store-query-sync-demo': {
          q: {
            path: 'search',
            parser: parseAsString.withDefault(''),
            limitUrlUpdates: debounce(500),
          },
          tab: {
            parser: parseAsString.withDefault('all'),
            history: 'push',
            limitUrlUpdates: throttle(180),
          },
          page: {
            parser: parseAsInteger.withDefault(1),
            history: 'push',
            limitUrlUpdates: throttle(180),
          },
        },
      },
    }),
  )

  const store = useStoreQuerySyncDemoStore(root)
  const filteredItems = computed(() => {
    const query = store.normalizedSearch
    return DEMO_ITEMS.filter(item => {
      const matchesTab = store.tab === 'all' || item.tab === store.tab
      if (!matchesTab) {
        return false
      }
      if (!query) {
        return true
      }
      return \`\${item.title} \${item.teaser} \${item.badge}\`.toLowerCase().includes(query)
    })
  })
  const totalPages = computed(() => Math.max(1, Math.ceil(filteredItems.get().length / PAGE_SIZE)))
  const visibleItems = computed(() => {
    const currentPage = Math.min(Math.max(1, store.page), totalPages.get())
    const start = (currentPage - 1) * PAGE_SIZE
    return filteredItems.get().slice(start, start + PAGE_SIZE)
  })
  const clampEffect = watchEffect(() => {
    const maxPage = totalPages.get()
    if (store.page < 1) {
      store.page = 1
      return
    }
    if (store.page > maxPage) {
      store.page = maxPage
    }
  })

  return {
    root,
    store,
    filteredItems,
    visibleItems,
    totalPages,
    clampEffect,
  }
}

const StoreQuerySyncDemo: FC = () => {
  const route = useRoute()
  const demo = useSetup(createDemoState)
  const historyRecords = ref<HistoryRecord[]>([])
  const historyRecorderCleanup = ref<(() => void) | null>(null)

  const appendHistoryRecord = (kind: HistoryRecordKind, href: string) => {
    nextHistoryRecordId += 1
    historyRecords.value = [
      {
        id: nextHistoryRecordId,
        kind,
        href,
      },
      ...historyRecords.value,
    ].slice(0, MAX_HISTORY_RECORDS)
  }

  onMounted(() => {
    historyRecorderCleanup.value = installHistoryRecorder(appendHistoryRecord)
  })

  onUnmounted(() => {
    historyRecorderCleanup.value?.()
    demo.clampEffect.dispose()
    demo.root.dispose()
  })

  const currentPath = route.get()?.path || '/examples/store-query-sync'
  const currentPage = computed(() => Math.min(Math.max(1, demo.store.page), demo.totalPages.get()))
  const expectedQuery = computed(() => buildExpectedQuery(demo.store))

  const resetStoreQuery = () => {
    demo.store.search = ''
    demo.store.tab = 'all'
    demo.store.page = 1
  }

  const clearAllUrlParams = () => {
    resetStoreQuery()

    if (typeof window === 'undefined' || !window.history) {
      return
    }

    const nextUrl = new URL(window.location.href)
    nextUrl.search = ''
    window.history.replaceState(
      window.history.state,
      '',
      \`\${nextUrl.pathname}\${nextUrl.search}\${nextUrl.hash}\`,
    )
  }

  return (
    <div className="grid gap-6">
      <div className="card bg-base-100 shadow">
        <div className="card-body gap-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Store、Router、Query Sync 串联演示</h2>
              <p className="max-w-3xl text-sm leading-6 text-base-content/75">
                搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router
                控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-base-200 px-3 py-1 font-medium">
                当前路由：{currentPath}
              </span>
              <span className="rounded-full bg-base-200 px-3 py-1 font-medium">
                预期 Query：{expectedQuery.get()}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <RouterLink
              className="btn btn-sm btn-outline"
              to={\`\${currentPath}?q=router&tab=router&page=1\`}
            >
              Router 预设
            </RouterLink>
            <RouterLink
              className="btn btn-sm btn-outline"
              to={\`\${currentPath}?q=sync&tab=store&page=1\`}
            >
              Store 预设
            </RouterLink>
            <RouterLink
              className="btn btn-sm btn-outline"
              to={\`\${currentPath}?q=render&tab=runtime&page=1\`}
            >
              Runtime 预设
            </RouterLink>
            <button className="btn btn-sm btn-ghost" onClick={resetStoreQuery}>
              清空 Query
            </button>
            <button className="btn btn-sm btn-ghost" onClick={clearAllUrlParams}>
              清理所有 URL 参数
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body gap-4">
            <label className="form-control gap-2">
              <span className="label-text font-medium">搜索（debounce 500ms）</span>
              <input
                className="input input-bordered"
                value={demo.store.search}
                onInput={(event: Event) => {
                  demo.store.search = (event.target as HTMLInputElement).value
                  demo.store.page = 1
                }}
                placeholder="例如：router / sync / render"
              />
            </label>

            <div className="grid gap-2">
              <span className="label-text font-medium">分类（throttle 180ms + push）</span>
              <div className="flex flex-wrap gap-2">
                {DEMO_TABS.map(tab => (
                  <button
                    key={tab.id}
                    className={\`btn btn-sm \${demo.store.tab === tab.id ? 'btn-primary' : 'btn-outline'}\`}
                    onClick={() => {
                      demo.store.tab = tab.id
                      demo.store.page = 1
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="text-xs leading-5 text-base-content/60">
                {DEMO_TABS.find(tab => tab.id === demo.store.tab)?.hint}
              </p>
            </div>

            <div className="grid gap-2">
              <span className="label-text font-medium">分页（throttle 180ms + push）</span>
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-sm btn-outline"
                  disabled={currentPage.get() <= 1}
                  onClick={() => {
                    demo.store.page = Math.max(1, currentPage.get() - 1)
                  }}
                >
                  上一页
                </button>
                <span className="min-w-24 text-center text-sm font-medium">
                  第 {currentPage.get()} / {demo.totalPages.get()} 页
                </span>
                <button
                  className="btn btn-sm btn-outline"
                  disabled={currentPage.get() >= demo.totalPages.get()}
                  onClick={() => {
                    demo.store.page = Math.min(demo.totalPages.get(), currentPage.get() + 1)
                  }}
                >
                  下一页
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70">
              <p>本地状态会立刻刷新卡片列表。</p>
              <p>地址栏会按 debounce 或 throttle 的规则延后追上。</p>
              <p>上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。</p>
              <p>
                下方记录面板会直接捕获 pushState、replaceState 和
                popstate，方便确认“下一页”是否真的入栈。
              </p>
            </div>

            <div className="grid gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="label-text font-medium">URL 写入记录</span>
                <span className="text-xs text-base-content/60">
                  分类 / 分页走 pushState，搜索走 replaceState。
                </span>
              </div>

              {historyRecords.value.length ? (
                <ul className="rounded-2xl border border-base-200 bg-base-100">
                  {historyRecords.value.map(record => (
                    <li
                      key={record.id}
                      className="flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0"
                    >
                      <span
                        className={\`badge badge-sm \${record.kind === 'push' ? 'badge-primary' : record.kind === 'replace' ? 'badge-ghost' : 'badge-outline'}\`}
                      >
                        {getHistoryRecordLabel(record.kind)}
                      </span>
                      <span className="font-mono text-xs text-base-content/70">{record.href}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60">
                  暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body gap-4">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-xl font-semibold">筛选结果</h3>
                <p className="text-sm text-base-content/70">
                  共 {demo.filteredItems.get().length} 条，当前展示 {demo.visibleItems.get().length}{' '}
                  条。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-base-200 px-3 py-1">
                  search={demo.store.search || '(空)'}
                </span>
                <span className="rounded-full bg-base-200 px-3 py-1">tab={demo.store.tab}</span>
                <span className="rounded-full bg-base-200 px-3 py-1">page={currentPage.get()}</span>
              </div>
            </div>

            {demo.visibleItems.get().length ? (
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {demo.visibleItems.get().map(item => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="badge badge-outline">{item.badge}</span>
                      <span className="text-xs text-base-content/50">{item.id}</span>
                    </div>
                    <h4 className="text-base font-semibold leading-6">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-base-content/70">{item.teaser}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60">
                当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreQuerySyncDemo
`,X=(e,r,i)=>n(M,()=>({options:{title:`Store Query Sync 与 URL 状态`,source:Y,codeCardClassName:`h-[520px] md:h-[1220px]`},children:(e,n,r)=>{let i=()=>c(e=>{let n=y();t(n,J,()=>({}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():o(e,r,i)}}));export{X as default};