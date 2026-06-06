import{$ as e,Bt as t,Ct as n,J as r,Kt as i,Lt as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,a as d,b as f,ct as p,et as m,gt as h,i as g,l as _,mt as v,ot as y,pt as ee,s as b,tt as x,ut as te}from"./vapor-runtime-DHPuOjqh.js";import{a as S,n as ne}from"./vapor-helpers-vapor-CJFAWine.js";import{n as C,s as re}from"./src-BvOcZ6uC.js";import{t as w}from"./createHomeSplitExamplePage-BB_cTfze.js";var T=new WeakMap,E=null,D=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,O=e=>{if(!D(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},ie=e=>D(e)&&`value`in e,ae=e=>typeof e.get==`function`?e.get():e.value,k=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return k({...e,defaultValue:t})}}),A=e=>({mode:`debounce`,wait:e}),oe=e=>({mode:`throttle`,wait:e}),j=k({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),M=k({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});k({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),k({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var N=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},P=e=>{let t=N(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},F=(e,t=new WeakMap)=>{if(!D(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(F(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!O(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=F(e[r],t)}),n},I=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(O(i)&&O(r)){I(i,r);return}e[n]=F(r)})},L=e=>{let n=t(e);return D(n)?n:e},se=(e,t)=>{delete e[t];let n=L(e);n!==e&&delete n[t]},R=(e,t)=>{Object.keys(L(e)).forEach(t=>{se(e,t)}),Object.keys(t).forEach(n=>{e[n]=F(t[n])})},z=e=>Array.isArray(e)?e.slice():[e],ce=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},B=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!D(n))return;n=n[t[e]]}return n},V=e=>D(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,H=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},U=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return H(e,t)===H(e,n)},le=e=>{if(e.defaultValue!==void 0)return F(e.defaultValue)},ue=(e,t)=>{if(t==null){let t=le(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=le(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},W=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&U(e.parser,t,e.parser.defaultValue)?null:H(e.parser,t),de=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=V(r)?{parser:r}:r,a=i.parser||j;return{queryKey:n,path:z(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:ce(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),fe=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},G=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,g()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=ue(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=B(e.store.$state,t.path);if(U(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,W(t,a));return}r.push({path:t.path,value:F(i.value)}),e.lastSerializedByKey.set(t.queryKey,W(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=W(t,B(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{pe(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=W(t,B(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(W(n,B(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,g()},Math.max(0,e-t)))},g=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=W(t,B(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},_=()=>{u(),t.forEach(e=>{f(e),p(e)})},v=()=>{!s()||r||(n.addEventListener?.(`popstate`,_),r=!0)},y=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,_),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=de(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),v(),p(o),a.forEach(e=>{let t=W(e,B(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=W(e,B(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=W(r,B(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=fe(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?y():h(),s.call(n)}}),c}},pe=(e,t,n)=>{if(t.length===0)return;let r=e=>typeof n==`function`?n(e):n,i=e=>{if(e>=t.length)return r(void 0);let n=t[e],a=typeof n==`number`?[]:{};return a[n]=i(e+1),a},a=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],r=a[n];if(!D(r)){a[n]=i(e+1);return}a=r}let o=t[t.length-1],s=a[o];a[o]=r(s)},K=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});D(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},q=e=>{let t=f();t&&T.set(t,e),E=e},J=()=>{let e=f(),t=e&&T.get(e)||E;if(!t)throw Error(`Store root not installed for current application/container`);return t},me=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{q(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{K(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),E===n&&(E=null)}};return n},he=(e,t,r)=>{let i=Object.create(null),a=new Map,o=new Set,s=null,c=(e,t)=>{a.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(i,e,n)},u=e=>{!s||a.has(e)||c(e,{get:()=>s[e],set:t=>{s[e]=t}})},d=()=>(s&&Object.keys(s).forEach(u),Array.from(a.keys())),f=new Proxy(Object.create(null),{ownKeys:()=>d(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(u(t),a.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return u(t),a.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;u(t);let r=a.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(u(t),a.has(t)):!1});if(typeof r==`function`){let e=r();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(i,e)});return}if(ie(n)){let e=P(n),r={enumerable:!0,configurable:!0,get:()=>ae(n)};e&&(r.set=e=>{n.value=e},a.set(t,{get:()=>ae(n),set:e=>{n.value=e}})),Object.defineProperty(i,t,r);return}c(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=r,t=e.state?e.state():{};s=n(t),Object.keys(t).forEach(u),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let r=h(()=>n.call(i,f));Object.defineProperty(i,t,{enumerable:!0,configurable:!0,get:()=>ae(r)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(i,e)})})}let p=F(f);return Object.defineProperty(i,`$id`,{enumerable:!0,configurable:!0,get:()=>t}),Object.defineProperty(i,`$state`,{enumerable:!0,configurable:!0,get:()=>f,set:e=>{O(e)&&I(f,e)}}),Object.defineProperty(i,`$patch`,{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(f);return}O(e)&&I(f,e)}}),Object.defineProperty(i,`$set`,{enumerable:!1,configurable:!0,value:(e,t)=>{pe(f,z(e),t)}}),Object.defineProperty(i,`$reset`,{enumerable:!1,configurable:!0,value:()=>{if(s){R(s,F(p)),Array.from(a.keys()).forEach(e=>{e in p||(delete i[e],a.delete(e))}),Object.keys(p).forEach(u);return}I(f,F(p))}}),Object.defineProperty(i,`$subscribe`,{enumerable:!1,configurable:!0,value:(e,n)=>{let r=!1,i=l(()=>{let i=F(f);(r||n?.immediate)&&e({storeId:t},i),r=!0});return o.add(i),()=>{o.delete(i),i.dispose()}}}),Object.defineProperty(i,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{Array.from(o).forEach(e=>{e.dispose(),o.delete(e)}),e._s.delete(t)}}),e._p.forEach(n=>{K(e,i,t,n)}),i};function ge(e,t){let n=n=>{let r=n||J(),i=r._s.get(e);if(i)return i;let a=he(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,`$id`,{enumerable:!1,configurable:!0,value:e}),n}var Y=3,_e=6,ve=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ye=[{id:`all`,label:`全部`,hint:`默认值会从 URL 里省略。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],be=0,xe=ge(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),X=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},Z=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},Se=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,Ce=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,Z(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,Z(t[2]??null))};let i=()=>{e(`popstate`,Z())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},we=()=>{let e=me();e.use(G({stores:{"store-query-sync-demo":{q:{path:`search`,parser:j.withDefault(``),limitUrlUpdates:A(500)},tab:{parser:j.withDefault(`all`),history:`push`,limitUrlUpdates:oe(180)},page:{parser:M.withDefault(1),history:`push`,limitUrlUpdates:oe(180)}}}}));let t=xe(e),n=S(`computed:1:0`,()=>h(()=>{let e=t.normalizedSearch;return ve.filter(n=>t.tab===`all`||n.tab===t.tab?e?`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e):!0:!1)})),r=S(`computed:1:1`,()=>h(()=>Math.max(1,Math.ceil(n.get().length/Y))));return{root:e,store:t,filteredItems:n,visibleItems:S(`computed:1:2`,()=>h(()=>{let e=(Math.min(Math.max(1,t.page),r.get())-1)*Y;return n.get().slice(e,e+Y)})),totalPages:r,clampEffect:S(`watchEffect:1:3`,()=>l(()=>{let e=r.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)}))}},Te=w({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
import {
  createQuerySync,
  createStore,
  debounce,
  defineStore,
  parseAsInteger,
  parseAsString,
  throttle,
} from '@rue-js/store'
import { type FC, computed, onMounted, onUnmounted, ref, watchEffect } from '@rue-js/rue'

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
    title: 'renderAnchor 更新链路',
    tab: 'runtime',
    teaser: '观察 block/renderable 在局部更新时的最小 DOM 变更。',
    badge: '渲染',
  },
]

const DEMO_TABS: Array<{ id: DemoTab; label: string; hint: string }> = [
  { id: 'all', label: '全部', hint: '默认值会从 URL 里省略。' },
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
  const demo = createDemoState()
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
`,Demo:()=>{let{route:t,demo:n,historyRecords:f,historyRecorderCleanup:w,appendHistoryRecord:T,currentPath:E,currentPage:D,expectedQuery:O,resetStoreQuery:ie,clearAllUrlParams:ae}=S(`useSetup:0:0`,()=>i(()=>{let e=re(),t=we(),n=S(`ref:1:4`,()=>a([])),r=S(`ref:1:5`,()=>a(null)),i=(e,t)=>{be+=1,n.value=[{id:be,kind:e,href:t},...n.value].slice(0,_e)};g(()=>{r.value=Ce(i)}),d(()=>{r.value?.(),t.clampEffect.dispose(),t.root.dispose()});let o=e.get()?.path||`/examples/store-query-sync`,s=S(`computed:1:6`,()=>h(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),c=S(`computed:1:7`,()=>h(()=>X(t.store))),l=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:n,historyRecorderCleanup:r,appendHistoryRecord:i,currentPath:o,currentPage:s,expectedQuery:c,resetStoreQuery:l,clearAllUrlParams:()=>{if(l(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return _(t=>{let i=e(`div`,t);p(i,`grid gap-6`);let a=e(`div`,i);c(i,a),p(a,`card bg-base-100 shadow`);let d=e(`div`,a);c(a,d),p(d,`card-body gap-4`);let h=e(`div`,d);c(d,h),p(h,`flex flex-wrap items-start justify-between gap-3`);let g=e(`div`,h);c(h,g),p(g,`space-y-2`);let S=e(`h2`,g);c(g,S),p(S,`text-2xl font-semibold`),c(S,m(`Store、Router、Query Sync 串联演示`));let re=e(`p`,g);c(g,re),p(re,`max-w-3xl text-sm leading-6 text-base-content/75`),c(re,m(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let w=e(`div`,h);c(h,w),p(w,`flex flex-wrap gap-2 text-xs`);let T=e(`span`,w);c(w,T),p(T,`rounded-full bg-base-200 px-3 py-1 font-medium`),c(T,m(`当前路由：`));let k=x(T);c(T,k),l(()=>{v(k,E)});let A=e(`span`,w);c(w,A),p(A,`rounded-full bg-base-200 px-3 py-1 font-medium`),c(A,m(`预期 Query：`));let oe=x(A);c(A,oe),l(()=>{v(oe,O.get())});let j=e(`div`,d);c(d,j),p(j,`flex flex-wrap gap-2`);let M=e(`a`,j);c(j,M),l(()=>{y(M,`href`,String(C.__rueHref(`${E}?q=router&tab=router&page=1`)))}),r(M,`click`,e=>C.__rueOnClick(e,`${E}?q=router&tab=router&page=1`,!1)),p(M,`btn btn-sm btn-outline`),c(M,m(`Router 预设`));let N=e(`a`,j);c(j,N),l(()=>{y(N,`href`,String(C.__rueHref(`${E}?q=sync&tab=store&page=1`)))}),r(N,`click`,e=>C.__rueOnClick(e,`${E}?q=sync&tab=store&page=1`,!1)),p(N,`btn btn-sm btn-outline`),c(N,m(`Store 预设`));let P=e(`a`,j);c(j,P),l(()=>{y(P,`href`,String(C.__rueHref(`${E}?q=render&tab=runtime&page=1`)))}),r(P,`click`,e=>C.__rueOnClick(e,`${E}?q=render&tab=runtime&page=1`,!1)),p(P,`btn btn-sm btn-outline`),c(P,m(`Runtime 预设`));let F=e(`button`,j);c(j,F),p(F,`btn btn-sm btn-ghost`),r(F,`click`,ie),c(F,m(`清空 Query`));let I=e(`button`,j);c(j,I),p(I,`btn btn-sm btn-ghost`),r(I,`click`,ae),c(I,m(`清理所有 URL 参数`));let L=e(`div`,i);c(i,L),p(L,`grid gap-6`);let se=e(`div`,L);c(L,se),p(se,`card bg-base-100 shadow`);let R=e(`div`,se);c(se,R),p(R,`card-body gap-4`);let z=e(`label`,R);c(R,z),p(z,`form-control gap-2`);let ce=e(`span`,z);c(z,ce),p(ce,`label-text font-medium`),c(ce,m(`搜索（debounce 500ms）`));let B=e(`input`,z);c(z,B),p(B,`input input-bordered`),l(()=>{ee(B,n.store.search)}),r(B,`input`,e=>{n.store.search=e.target.value,n.store.page=1}),y(B,`placeholder`,`例如：router / sync / render`);let V=e(`div`,R);c(R,V),p(V,`grid gap-2`);let H=e(`span`,V);c(V,H),p(H,`label-text font-medium`),c(H,m(`分类（throttle 180ms + push）`));let U=e(`div`,V);c(V,U),p(U,`flex flex-wrap gap-2`);let le=u(`rue:list:start`),ue=u(`rue:list:end`);c(U,le),c(U,ue);let W=new Map;l(()=>{W=ne({items:ye||[],getKey:(e,t)=>e.id,elements:W,parent:U,before:ue,singleRoot:!0,trackIndex:!1,start:le,renderItem:(t,i,a,d,f)=>{b(_(()=>{let i=o(),a=e(`button`,i);c(i,a),l(()=>{y(a,`key`,String(t.id))}),l(()=>{p(a,String(`btn btn-sm ${n.store.tab===t.id?`btn-primary`:`btn-outline`}`))}),r(a,`click`,()=>{n.store.tab=t.id,n.store.page=1});let d=u(`rue:slot:anchor`);return c(a,d),l(()=>{let e=t.label;s(()=>b(e,a,d))}),i}),i,a)}})});let de=e(`p`,V);c(V,de),p(de,`text-xs leading-5 text-base-content/60`);let fe=x(de);c(de,fe),l(()=>{v(fe,ye.find(e=>e.id===n.store.tab)?.hint)});let G=e(`div`,R);c(R,G),p(G,`grid gap-2`);let pe=e(`span`,G);c(G,pe),p(pe,`label-text font-medium`),c(pe,m(`分页（throttle 180ms + push）`));let K=e(`div`,G);c(G,K),p(K,`flex items-center gap-2`);let q=e(`button`,K);c(K,q),p(q,`btn btn-sm btn-outline`),l(()=>{te(q,D.get()<=1)}),r(q,`click`,()=>{n.store.page=Math.max(1,D.get()-1)}),c(q,m(`上一页`));let J=e(`span`,K);c(K,J),p(J,`min-w-24 text-center text-sm font-medium`),c(J,m(`第 `));let me=x(J);c(J,me),l(()=>{v(me,D.get())}),c(J,m(` / `));let he=x(J);c(J,he),l(()=>{v(he,n.totalPages.get())}),c(J,m(` 页`));let ge=e(`button`,K);c(K,ge),p(ge,`btn btn-sm btn-outline`),l(()=>{te(ge,D.get()>=n.totalPages.get())}),r(ge,`click`,()=>{n.store.page=Math.min(n.totalPages.get(),D.get()+1)}),c(ge,m(`下一页`));let Y=e(`div`,R);c(R,Y),p(Y,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let _e=e(`p`,Y);c(Y,_e),c(_e,m(`本地状态会立刻刷新卡片列表。`));let ve=e(`p`,Y);c(Y,ve),c(ve,m(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let be=e(`p`,Y);c(Y,be),c(be,m(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let xe=e(`p`,Y);c(Y,xe),c(xe,m(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let X=e(`div`,R);c(R,X),p(X,`grid gap-2`);let Z=e(`div`,X);c(X,Z),p(Z,`flex flex-wrap items-center justify-between gap-2`);let Ce=e(`span`,Z);c(Z,Ce),p(Ce,`label-text font-medium`),c(Ce,m(`URL 写入记录`));let we=e(`span`,Z);c(Z,we),p(we,`text-xs text-base-content/60`),c(we,m(`分类 / 分页走 pushState，搜索走 replaceState。`));let Te=u(`rue:slot:anchor`);c(X,Te),l(()=>{let t=f.value.length?_(()=>{let t=o(),n=e(`ul`,t);c(t,n),p(n,`rounded-2xl border border-base-200 bg-base-100`);let r=u(`rue:list:start`),i=u(`rue:list:end`);c(n,r),c(n,i);let a=new Map;return l(()=>{a=ne({items:f.value||[],getKey:(e,t)=>e.id,elements:a,parent:n,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(t,n,r,i,a)=>{b(_(()=>{let n=o(),r=e(`li`,n);c(n,r),l(()=>{y(r,`key`,String(t.id))}),p(r,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let i=e(`span`,r);c(r,i),l(()=>{p(i,String(`badge badge-sm ${t.kind===`push`?`badge-primary`:t.kind===`replace`?`badge-ghost`:`badge-outline`}`))});let a=u(`rue:slot:anchor`);c(i,a),l(()=>{let e=Se(t.kind);s(()=>b(e,i,a))});let d=e(`span`,r);c(r,d),p(d,`font-mono text-xs text-base-content/70`);let f=u(`rue:slot:anchor`);return c(d,f),l(()=>{let e=t.href;s(()=>b(e,d,f))}),n}),n,r)}})}),t}):_(()=>{let t=o(),n=e(`div`,t);return c(t,n),p(n,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),c(n,m(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),t});s(()=>b(t,X,Te))});let Ee=e(`div`,L);c(L,Ee),p(Ee,`card bg-base-100 shadow`);let De=e(`div`,Ee);c(Ee,De),p(De,`card-body gap-4`);let Oe=e(`div`,De);c(De,Oe),p(Oe,`flex flex-col gap-3`);let ke=e(`div`,Oe);c(Oe,ke);let Ae=e(`h3`,ke);c(ke,Ae),p(Ae,`text-xl font-semibold`),c(Ae,m(`筛选结果`));let Q=e(`p`,ke);c(ke,Q),p(Q,`text-sm text-base-content/70`),c(Q,m(`共 `));let je=u(`rue:slot:anchor`);c(Q,je),l(()=>{let e=n.filteredItems.get().length;s(()=>b(e,Q,je))}),c(Q,m(` 条，当前展示 `));let Me=u(`rue:slot:anchor`);c(Q,Me),l(()=>{let e=n.visibleItems.get().length;s(()=>b(e,Q,Me))});let Ne=x(Q);c(Q,Ne),v(Ne,` `),c(Q,m(`条。`));let $=e(`div`,Oe);c(Oe,$),p($,`flex flex-wrap gap-2 text-xs`);let Pe=e(`span`,$);c($,Pe),p(Pe,`rounded-full bg-base-200 px-3 py-1`),c(Pe,m(`search=`));let Fe=u(`rue:slot:anchor`);c(Pe,Fe),l(()=>{let e=n.store.search||`(空)`;s(()=>b(e,Pe,Fe))});let Ie=e(`span`,$);c($,Ie),p(Ie,`rounded-full bg-base-200 px-3 py-1`),c(Ie,m(`tab=`));let Le=u(`rue:slot:anchor`);c(Ie,Le),l(()=>{let e=n.store.tab;s(()=>b(e,Ie,Le))});let Re=e(`span`,$);c($,Re),p(Re,`rounded-full bg-base-200 px-3 py-1`),c(Re,m(`page=`));let ze=x(Re);c(Re,ze),l(()=>{v(ze,D.get())});let Be=u(`rue:slot:anchor`);return c(De,Be),l(()=>{let t=n.visibleItems.get().length?_(()=>{let t=o(),r=e(`div`,t);c(t,r),p(r,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let i=u(`rue:list:start`),a=u(`rue:list:end`);c(r,i),c(r,a);let d=new Map;return l(()=>{d=ne({items:n.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:d,parent:r,before:a,singleRoot:!0,trackIndex:!1,start:i,renderItem:(t,n,r,i,a)=>{b(_(()=>{let n=o(),r=e(`article`,n);c(n,r),l(()=>{y(r,`key`,String(t.id))}),p(r,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let i=e(`div`,r);c(r,i),p(i,`mb-3 flex items-center justify-between gap-3`);let a=e(`span`,i);c(i,a),p(a,`badge badge-outline`);let d=u(`rue:slot:anchor`);c(a,d),l(()=>{let e=t.badge;s(()=>b(e,a,d))});let f=e(`span`,i);c(i,f),p(f,`text-xs text-base-content/50`);let m=u(`rue:slot:anchor`);c(f,m),l(()=>{let e=t.id;s(()=>b(e,f,m))});let h=e(`h4`,r);c(r,h),p(h,`text-base font-semibold leading-6`);let g=u(`rue:slot:anchor`);c(h,g),l(()=>{let e=t.title;s(()=>b(e,h,g))});let _=e(`p`,r);c(r,_),p(_,`mt-2 text-sm leading-6 text-base-content/70`);let v=u(`rue:slot:anchor`);return c(_,v),l(()=>{let e=t.teaser;s(()=>b(e,_,v))}),n}),n,r)}})}),t}):_(()=>{let t=o(),n=e(`div`,t);return c(t,n),p(n,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),c(n,m(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),t});s(()=>b(t,De,Be))}),i})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Te as default};