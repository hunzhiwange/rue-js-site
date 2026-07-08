import{$t as e,Nt as t,Q as n,Vt as r,Xt as i,Z as a,at as o,bt as s,dt as c,ht as l,i as u,it as d,l as f,nt as p,o as m,on as h,pt as g,r as _,rt as v,tn as y,tt as b,wt as x,y as ee,yt as te}from"./vapor-runtime-x7F5M-49.js";import{a as S,n as ne}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as C,s as re}from"./src-BEG41jq3.js";import{t as w}from"./createHomeSplitExamplePage-Da6pk2hb.js";var T=new WeakMap,E=null,D=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,O=e=>{if(!D(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},ie=e=>D(e)&&`value`in e,ae=e=>typeof e.get==`function`?e.get():e.value,k=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return k({...e,defaultValue:t})}}),A=e=>({mode:`debounce`,wait:e}),oe=e=>({mode:`throttle`,wait:e}),j=k({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),M=k({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});k({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),k({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var N=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},P=e=>{let t=N(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},F=(e,t=new WeakMap)=>{if(!D(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(F(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!O(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=F(e[r],t)}),n},I=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(O(i)&&O(r)){I(i,r);return}e[n]=F(r)})},L=t=>{let n=e(t);return D(n)?n:t},se=(e,t)=>{delete e[t];let n=L(e);n!==e&&delete n[t]},R=(e,t)=>{Object.keys(L(e)).forEach(t=>{se(e,t)}),Object.keys(t).forEach(n=>{e[n]=F(t[n])})},z=e=>Array.isArray(e)?e.slice():[e],ce=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},B=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!D(n))return;n=n[t[e]]}return n},V=e=>D(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,H=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},U=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return H(e,t)===H(e,n)},le=e=>{if(e.defaultValue!==void 0)return F(e.defaultValue)},ue=(e,t)=>{if(t==null){let t=le(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=le(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},W=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&U(e.parser,t,e.parser.defaultValue)?null:H(e.parser,t),de=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=V(r)?{parser:r}:r,a=i.parser||j;return{queryKey:n,path:z(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:ce(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),fe=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},G=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,g()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=ue(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=B(e.store.$state,t.path);if(U(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,W(t,a));return}r.push({path:t.path,value:F(i.value)}),e.lastSerializedByKey.set(t.queryKey,W(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=W(t,B(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{pe(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=W(t,B(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(W(n,B(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,g()},Math.max(0,e-t)))},g=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=W(t,B(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},_=()=>{u(),t.forEach(e=>{f(e),p(e)})},v=()=>{!s()||r||(n.addEventListener?.(`popstate`,_),r=!0)},y=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,_),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=de(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),v(),p(o),a.forEach(e=>{let t=W(e,B(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=W(e,B(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=W(r,B(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=fe(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?y():h(),s.call(n)}}),c}},pe=(e,t,n)=>{if(t.length===0)return;let r=e=>typeof n==`function`?n(e):n,i=e=>{if(e>=t.length)return r(void 0);let n=t[e],a=typeof n==`number`?[]:{};return a[n]=i(e+1),a},a=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],r=a[n];if(!D(r)){a[n]=i(e+1);return}a=r}let o=t[t.length-1],s=a[o];a[o]=r(s)},K=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});D(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},q=e=>{let t=ee();t&&T.set(t,e),E=e},J=()=>{let e=ee(),t=e&&T.get(e)||E;if(!t)throw Error(`Store root not installed for current application/container`);return t},me=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{q(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{K(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),E===n&&(E=null)}};return n},he=(e,n,i)=>{let a=Object.create(null),o=new Map,s=new Set,c=null,l=(e,t)=>{o.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(a,e,n)},u=e=>{!c||o.has(e)||l(e,{get:()=>c[e],set:t=>{c[e]=t}})},d=()=>(c&&Object.keys(c).forEach(u),Array.from(o.keys())),f=new Proxy(Object.create(null),{ownKeys:()=>d(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(u(t),o.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return u(t),o.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;u(t);let r=o.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(u(t),o.has(t)):!1});if(typeof i==`function`){let e=i();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(a,e)});return}if(ie(n)){let e=P(n),r={enumerable:!0,configurable:!0,get:()=>ae(n)};e&&(r.set=e=>{n.value=e},o.set(t,{get:()=>ae(n),set:e=>{n.value=e}})),Object.defineProperty(a,t,r);return}l(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=i,n=e.state?e.state():{};c=t(n),Object.keys(n).forEach(u),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let r=x(()=>n.call(a,f));Object.defineProperty(a,t,{enumerable:!0,configurable:!0,get:()=>ae(r)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(a,e)})})}let p=F(f);return Object.defineProperty(a,`$id`,{enumerable:!0,configurable:!0,get:()=>n}),Object.defineProperty(a,`$state`,{enumerable:!0,configurable:!0,get:()=>f,set:e=>{O(e)&&I(f,e)}}),Object.defineProperty(a,`$patch`,{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(f);return}O(e)&&I(f,e)}}),Object.defineProperty(a,`$set`,{enumerable:!1,configurable:!0,value:(e,t)=>{pe(f,z(e),t)}}),Object.defineProperty(a,`$reset`,{enumerable:!1,configurable:!0,value:()=>{if(c){R(c,F(p)),Array.from(o.keys()).forEach(e=>{e in p||(delete a[e],o.delete(e))}),Object.keys(p).forEach(u);return}I(f,F(p))}}),Object.defineProperty(a,`$subscribe`,{enumerable:!1,configurable:!0,value:(e,t)=>{let i=!1,a=r(()=>{let r=F(f);(i||t?.immediate)&&e({storeId:n},r),i=!0});return s.add(a),()=>{s.delete(a),a.dispose()}}}),Object.defineProperty(a,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{Array.from(s).forEach(e=>{e.dispose(),s.delete(e)}),e._s.delete(n)}}),e._p.forEach(t=>{K(e,a,n,t)}),a};function ge(e,t){let n=n=>{let r=n||J(),i=r._s.get(e);if(i)return i;let a=he(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,`$id`,{enumerable:!1,configurable:!0,value:e}),n}var Y=3,_e=6,ve=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ye=[{id:`all`,label:`全部`,hint:`默认值不会写入 URL。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],be=0,xe=ge(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),X=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},Z=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},Se=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,Ce=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,Z(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,Z(t[2]??null))};let i=()=>{e(`popstate`,Z())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},we=()=>{let e=me();e.use(G({stores:{"store-query-sync-demo":{q:{path:`search`,parser:j.withDefault(``),limitUrlUpdates:A(500)},tab:{parser:j.withDefault(`all`),history:`push`,limitUrlUpdates:oe(180)},page:{parser:M.withDefault(1),history:`push`,limitUrlUpdates:oe(180)}}}}));let t=xe(e),n=S(`computed:1:0`,()=>x(()=>{let e=t.normalizedSearch;return ve.filter(n=>t.tab===`all`||n.tab===t.tab?e?`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e):!0:!1)})),i=S(`computed:1:1`,()=>x(()=>Math.max(1,Math.ceil(n.get().length/Y))));return{root:e,store:t,filteredItems:n,visibleItems:S(`computed:1:2`,()=>x(()=>{let e=(Math.min(Math.max(1,t.page),i.get())-1)*Y;return n.get().slice(e,e+Y)})),totalPages:i,clampEffect:S(`watchEffect:1:3`,()=>r(()=>{let e=i.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)}))}},Te=w({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
`,Demo:()=>{let{route:e,demo:t,historyRecords:ee,historyRecorderCleanup:w,appendHistoryRecord:T,currentPath:E,currentPage:D,expectedQuery:O,resetStoreQuery:ie,clearAllUrlParams:ae}=S(`useSetup:0:0`,()=>h(()=>{let e=re(),t=we(),n=S(`ref:1:4`,()=>i([])),r=S(`ref:1:5`,()=>i(null)),a=(e,t)=>{be+=1,n.value=[{id:be,kind:e,href:t},...n.value].slice(0,_e)};_(()=>{r.value=Ce(a)}),u(()=>{r.value?.(),t.clampEffect.dispose(),t.root.dispose()});let o=e.get()?.path||`/examples/store-query-sync`,s=S(`computed:1:6`,()=>x(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),c=S(`computed:1:7`,()=>x(()=>X(t.store))),l=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:n,historyRecorderCleanup:r,appendHistoryRecord:a,currentPath:o,currentPage:s,expectedQuery:c,resetStoreQuery:l,clearAllUrlParams:()=>{if(l(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return f(e=>{let i=v(`div`,e);g(i,`grid gap-6`);let u=v(`div`,i);n(i,u),g(u,`card bg-base-100 shadow`);let h=v(`div`,u);n(u,h),g(h,`card-body gap-4`);let _=v(`div`,h);n(h,_),g(_,`flex flex-wrap items-start justify-between gap-3`);let x=v(`div`,_);n(_,x),g(x,`space-y-2`);let S=v(`h2`,x);n(x,S),g(S,`text-2xl font-semibold`),n(S,d(`Store、Router、Query Sync 串联演示`));let re=v(`p`,x);n(x,re),g(re,`max-w-3xl text-sm leading-6 text-base-content/75`),n(re,d(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let w=v(`div`,_);n(_,w),g(w,`flex flex-wrap gap-2 text-xs`);let T=v(`span`,w);n(w,T),g(T,`rounded-full bg-base-200 px-3 py-1 font-medium`),n(T,d(`当前路由：`));let k=b(`rue:slot:anchor`);n(T,k),r(()=>{let e=E;y(()=>m(e,T,k))});let A=v(`span`,w);n(w,A),g(A,`rounded-full bg-base-200 px-3 py-1 font-medium`),n(A,d(`预期 Query：`));let oe=b(`rue:slot:anchor`);n(A,oe),r(()=>{let e=O.get();y(()=>m(e,A,oe))});let j=v(`div`,h);n(h,j),g(j,`flex flex-wrap gap-2`);let M=v(`a`,j);n(j,M),r(()=>{c(M,`href`,String(C.__rueHref(`${E}?q=router&tab=router&page=1`)))}),a(M,`click`,e=>C.__rueOnClick(e,`${E}?q=router&tab=router&page=1`,!1)),g(M,`btn btn-sm btn-outline`),n(M,d(`Router 预设`));let N=v(`a`,j);n(j,N),r(()=>{c(N,`href`,String(C.__rueHref(`${E}?q=sync&tab=store&page=1`)))}),a(N,`click`,e=>C.__rueOnClick(e,`${E}?q=sync&tab=store&page=1`,!1)),g(N,`btn btn-sm btn-outline`),n(N,d(`Store 预设`));let P=v(`a`,j);n(j,P),r(()=>{c(P,`href`,String(C.__rueHref(`${E}?q=render&tab=runtime&page=1`)))}),a(P,`click`,e=>C.__rueOnClick(e,`${E}?q=render&tab=runtime&page=1`,!1)),g(P,`btn btn-sm btn-outline`),n(P,d(`Runtime 预设`));let F=v(`button`,j);n(j,F),g(F,`btn btn-sm btn-ghost`),a(F,`click`,ie),n(F,d(`清空 Query`));let I=v(`button`,j);n(j,I),g(I,`btn btn-sm btn-ghost`),a(I,`click`,ae),n(I,d(`清理所有 URL 参数`));let L=v(`div`,i);n(i,L),g(L,`grid gap-6`);let se=v(`div`,L);n(L,se),g(se,`card bg-base-100 shadow`);let R=v(`div`,se);n(se,R),g(R,`card-body gap-4`);let z=v(`label`,R);n(R,z),g(z,`form-control gap-2`);let ce=v(`span`,z);n(z,ce),g(ce,`label-text font-medium`),n(ce,d(`搜索（debounce 500ms）`));let B=v(`input`,z);n(z,B),g(B,`input input-bordered`),r(()=>{te(B,t.store.search)}),a(B,`input`,e=>{t.store.search=e.target.value,t.store.page=1}),c(B,`placeholder`,`例如：router / sync / render`);let V=v(`div`,R);n(R,V),g(V,`grid gap-2`);let H=v(`span`,V);n(V,H),g(H,`label-text font-medium`),n(H,d(`分类（throttle 180ms + push）`));let U=v(`div`,V);n(V,U),g(U,`flex flex-wrap gap-2`);let le=b(`rue:list:start`),ue=b(`rue:list:end`);n(U,le),n(U,ue);let W=new Map;r(()=>{W=ne({items:ye||[],getKey:(e,t)=>e.id,elements:W,parent:U,before:ue,singleRoot:!0,trackIndex:!1,start:le,renderItem:(e,i,o,s,l)=>{m(f(()=>{let i=p(),o=v(`button`,i);n(i,o),r(()=>{c(o,`key`,String(e.id))}),r(()=>{g(o,`btn btn-sm ${t.store.tab===e.id?`btn-primary`:`btn-outline`}`)}),a(o,`click`,()=>{t.store.tab=e.id,t.store.page=1});let s=b(`rue:slot:anchor`);return n(o,s),r(()=>{let t=e.label;y(()=>m(t,o,s))}),i}),i,o)}})});let de=v(`p`,V);n(V,de),g(de,`text-xs leading-5 text-base-content/60`);let fe=o(de);n(de,fe),r(()=>{s(fe,ye.find(e=>e.id===t.store.tab)?.hint)});let G=v(`div`,R);n(R,G),g(G,`grid gap-2`);let pe=v(`span`,G);n(G,pe),g(pe,`label-text font-medium`),n(pe,d(`分页（throttle 180ms + push）`));let K=v(`div`,G);n(G,K),g(K,`flex items-center gap-2`);let q=v(`button`,K);n(K,q),g(q,`btn btn-sm btn-outline`),r(()=>{l(q,D.get()<=1)}),a(q,`click`,()=>{t.store.page=Math.max(1,D.get()-1)}),n(q,d(`上一页`));let J=v(`span`,K);n(K,J),g(J,`min-w-24 text-center text-sm font-medium`),n(J,d(`第 `));let me=b(`rue:slot:anchor`);n(J,me),r(()=>{let e=D.get();y(()=>m(e,J,me))}),n(J,d(` / `));let he=b(`rue:slot:anchor`);n(J,he),r(()=>{let e=t.totalPages.get();y(()=>m(e,J,he))}),n(J,d(` 页`));let ge=v(`button`,K);n(K,ge),g(ge,`btn btn-sm btn-outline`),r(()=>{l(ge,D.get()>=t.totalPages.get())}),a(ge,`click`,()=>{t.store.page=Math.min(t.totalPages.get(),D.get()+1)}),n(ge,d(`下一页`));let Y=v(`div`,R);n(R,Y),g(Y,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let _e=v(`p`,Y);n(Y,_e),n(_e,d(`本地状态会立刻刷新卡片列表。`));let ve=v(`p`,Y);n(Y,ve),n(ve,d(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let be=v(`p`,Y);n(Y,be),n(be,d(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let xe=v(`p`,Y);n(Y,xe),n(xe,d(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let X=v(`div`,R);n(R,X),g(X,`grid gap-2`);let Z=v(`div`,X);n(X,Z),g(Z,`flex flex-wrap items-center justify-between gap-2`);let Ce=v(`span`,Z);n(Z,Ce),g(Ce,`label-text font-medium`),n(Ce,d(`URL 写入记录`));let we=v(`span`,Z);n(Z,we),g(we,`text-xs text-base-content/60`),n(we,d(`分类 / 分页走 pushState，搜索走 replaceState。`));let Te=b(`rue:slot:anchor`);n(X,Te),r(()=>{let e=ee.value.length?f(()=>{let e=p(),t=v(`ul`,e);n(e,t),g(t,`rounded-2xl border border-base-200 bg-base-100`);let i=b(`rue:list:start`),a=b(`rue:list:end`);n(t,i),n(t,a);let o=new Map;return r(()=>{o=ne({items:ee.value||[],getKey:(e,t)=>e.id,elements:o,parent:t,before:a,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,t,i,a,o)=>{m(f(()=>{let t=p(),i=v(`li`,t);n(t,i),r(()=>{c(i,`key`,String(e.id))}),g(i,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let a=v(`span`,i);n(i,a),r(()=>{g(a,`badge badge-sm ${e.kind===`push`?`badge-primary`:e.kind===`replace`?`badge-ghost`:`badge-outline`}`)});let o=b(`rue:slot:anchor`);n(a,o),r(()=>{let t=Se(e.kind);y(()=>m(t,a,o))});let s=v(`span`,i);n(i,s),g(s,`font-mono text-xs text-base-content/70`);let l=b(`rue:slot:anchor`);return n(s,l),r(()=>{let t=e.href;y(()=>m(t,s,l))}),t}),t,i)}})}),e}):f(()=>{let e=p(),t=v(`div`,e);return n(e,t),g(t,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),n(t,d(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),e});y(()=>m(e,X,Te))});let Ee=v(`div`,L);n(L,Ee),g(Ee,`card bg-base-100 shadow`);let De=v(`div`,Ee);n(Ee,De),g(De,`card-body gap-4`);let Oe=v(`div`,De);n(De,Oe),g(Oe,`flex flex-col gap-3`);let ke=v(`div`,Oe);n(Oe,ke);let Ae=v(`h3`,ke);n(ke,Ae),g(Ae,`text-xl font-semibold`),n(Ae,d(`筛选结果`));let Q=v(`p`,ke);n(ke,Q),g(Q,`text-sm text-base-content/70`),n(Q,d(`共 `));let je=b(`rue:slot:anchor`);n(Q,je),r(()=>{let e=t.filteredItems.get().length;y(()=>m(e,Q,je))}),n(Q,d(` 条，当前展示 `));let Me=b(`rue:slot:anchor`);n(Q,Me),r(()=>{let e=t.visibleItems.get().length;y(()=>m(e,Q,Me))});let Ne=o(Q);n(Q,Ne),s(Ne,` `),n(Q,d(`条。`));let $=v(`div`,Oe);n(Oe,$),g($,`flex flex-wrap gap-2 text-xs`);let Pe=v(`span`,$);n($,Pe),g(Pe,`rounded-full bg-base-200 px-3 py-1`),n(Pe,d(`search=`));let Fe=b(`rue:slot:anchor`);n(Pe,Fe),r(()=>{let e=t.store.search||`(空)`;y(()=>m(e,Pe,Fe))});let Ie=v(`span`,$);n($,Ie),g(Ie,`rounded-full bg-base-200 px-3 py-1`),n(Ie,d(`tab=`));let Le=b(`rue:slot:anchor`);n(Ie,Le),r(()=>{let e=t.store.tab;y(()=>m(e,Ie,Le))});let Re=v(`span`,$);n($,Re),g(Re,`rounded-full bg-base-200 px-3 py-1`),n(Re,d(`page=`));let ze=b(`rue:slot:anchor`);n(Re,ze),r(()=>{let e=D.get();y(()=>m(e,Re,ze))});let Be=b(`rue:slot:anchor`);return n(De,Be),r(()=>{let e=t.visibleItems.get().length?f(()=>{let e=p(),i=v(`div`,e);n(e,i),g(i,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let a=b(`rue:list:start`),o=b(`rue:list:end`);n(i,a),n(i,o);let s=new Map;return r(()=>{s=ne({items:t.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:s,parent:i,before:o,singleRoot:!0,trackIndex:!1,start:a,renderItem:(e,t,i,a,o)=>{m(f(()=>{let t=p(),i=v(`article`,t);n(t,i),r(()=>{c(i,`key`,String(e.id))}),g(i,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let a=v(`div`,i);n(i,a),g(a,`mb-3 flex items-center justify-between gap-3`);let o=v(`span`,a);n(a,o),g(o,`badge badge-outline`);let s=b(`rue:slot:anchor`);n(o,s),r(()=>{let t=e.badge;y(()=>m(t,o,s))});let l=v(`span`,a);n(a,l),g(l,`text-xs text-base-content/50`);let u=b(`rue:slot:anchor`);n(l,u),r(()=>{let t=e.id;y(()=>m(t,l,u))});let d=v(`h4`,i);n(i,d),g(d,`text-base font-semibold leading-6`);let f=b(`rue:slot:anchor`);n(d,f),r(()=>{let t=e.title;y(()=>m(t,d,f))});let h=v(`p`,i);n(i,h),g(h,`mt-2 text-sm leading-6 text-base-content/70`);let _=b(`rue:slot:anchor`);return n(h,_),r(()=>{let t=e.teaser;y(()=>m(t,h,_))}),t}),t,i)}})}),e}):f(()=>{let e=p(),t=v(`div`,e);return n(e,t),g(t,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),n(t,d(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),e});y(()=>m(e,De,Be))}),i})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Te as default};