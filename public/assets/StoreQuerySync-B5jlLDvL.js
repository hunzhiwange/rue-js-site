import{$ as e,Bt as t,Ht as n,J as r,Lt as i,Q as a,X as o,Xt as s,Z as c,a as l,at as u,et as d,ft as f,gt as p,i as m,l as h,lt as g,pt as _,q as v,qt as y,s as b,st as x,wt as S,y as ee}from"./vapor-runtime-iQZthBPQ.js";import{a as C,n as te}from"./vapor-helpers-vapor-BjKHCvOa.js";import{n as ne,s as re}from"./src-BzozQvLy.js";import{t as w}from"./createHomeSplitExamplePage-C98rg19g.js";var T=new WeakMap,E=null,D=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,ie=e=>{if(!D(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},ae=e=>D(e)&&`value`in e,oe=e=>typeof e.get==`function`?e.get():e.value,O=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return O({...e,defaultValue:t})}}),k=e=>({mode:`debounce`,wait:e}),se=e=>({mode:`throttle`,wait:e}),A=O({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),j=O({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});O({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),O({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var M=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},N=e=>{let t=M(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},P=(e,t=new WeakMap)=>{if(!D(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(P(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!ie(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=P(e[r],t)}),n},F=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(ie(i)&&ie(r)){F(i,r);return}e[n]=P(r)})},I=e=>{let n=t(e);return D(n)?n:e},ce=(e,t)=>{delete e[t];let n=I(e);n!==e&&delete n[t]},L=(e,t)=>{Object.keys(I(e)).forEach(t=>{ce(e,t)}),Object.keys(t).forEach(n=>{e[n]=P(t[n])})},R=e=>Array.isArray(e)?e.slice():[e],le=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},z=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!D(n))return;n=n[t[e]]}return n},B=e=>D(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,V=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},H=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return V(e,t)===V(e,n)},ue=e=>{if(e.defaultValue!==void 0)return P(e.defaultValue)},de=(e,t)=>{if(t==null){let t=ue(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=ue(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},U=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&H(e.parser,t,e.parser.defaultValue)?null:V(e.parser,t),fe=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=B(r)?{parser:r}:r,a=i.parser||A;return{queryKey:n,path:R(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:le(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),pe=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},W=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,g()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=de(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=z(e.store.$state,t.path);if(H(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,U(t,a));return}r.push({path:t.path,value:P(i.value)}),e.lastSerializedByKey.set(t.queryKey,U(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=U(t,z(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{me(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=U(t,z(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(U(n,z(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,g()},Math.max(0,e-t)))},g=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=U(t,z(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},_=()=>{u(),t.forEach(e=>{f(e),p(e)})},v=()=>{!s()||r||(n.addEventListener?.(`popstate`,_),r=!0)},y=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,_),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=fe(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),v(),p(o),a.forEach(e=>{let t=U(e,z(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=U(e,z(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=U(r,z(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=pe(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?y():h(),s.call(n)}}),c}},me=(e,t,n)=>{if(t.length===0)return;let r=e=>typeof n==`function`?n(e):n,i=e=>{if(e>=t.length)return r(void 0);let n=t[e],a=typeof n==`number`?[]:{};return a[n]=i(e+1),a},a=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],r=a[n];if(!D(r)){a[n]=i(e+1);return}a=r}let o=t[t.length-1],s=a[o];a[o]=r(s)},G=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});D(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},K=e=>{let t=ee();t&&T.set(t,e),E=e},q=()=>{let e=ee(),t=e&&T.get(e)||E;if(!t)throw Error(`Store root not installed for current application/container`);return t},he=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{K(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{G(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),E===n&&(E=null)}};return n},ge=(e,t,n)=>{let r=Object.create(null),i=new Map,a=new Set,o=null,c=(e,t)=>{i.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(r,e,n)},l=e=>{!o||i.has(e)||c(e,{get:()=>o[e],set:t=>{o[e]=t}})},u=()=>(o&&Object.keys(o).forEach(l),Array.from(i.keys())),d=new Proxy(Object.create(null),{ownKeys:()=>u(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(l(t),i.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return l(t),i.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;l(t);let r=i.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(l(t),i.has(t)):!1});if(typeof n==`function`){let e=n();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(r,e)});return}if(ae(n)){let e=N(n),a={enumerable:!0,configurable:!0,get:()=>oe(n)};e&&(a.set=e=>{n.value=e},i.set(t,{get:()=>oe(n),set:e=>{n.value=e}})),Object.defineProperty(r,t,a);return}c(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=n,t=e.state?e.state():{};o=S(t),Object.keys(t).forEach(l),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let i=p(()=>n.call(r,d));Object.defineProperty(r,t,{enumerable:!0,configurable:!0,get:()=>oe(i)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(r,e)})})}let f=P(d);return Object.defineProperty(r,`$id`,{enumerable:!0,configurable:!0,get:()=>t}),Object.defineProperty(r,`$state`,{enumerable:!0,configurable:!0,get:()=>d,set:e=>{ie(e)&&F(d,e)}}),Object.defineProperty(r,`$patch`,{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(d);return}ie(e)&&F(d,e)}}),Object.defineProperty(r,`$set`,{enumerable:!1,configurable:!0,value:(e,t)=>{me(d,R(e),t)}}),Object.defineProperty(r,`$reset`,{enumerable:!1,configurable:!0,value:()=>{if(o){L(o,P(f)),Array.from(i.keys()).forEach(e=>{e in f||(delete r[e],i.delete(e))}),Object.keys(f).forEach(l);return}F(d,P(f))}}),Object.defineProperty(r,`$subscribe`,{enumerable:!1,configurable:!0,value:(e,n)=>{let r=!1,i=s(()=>{let i=P(d);(r||n?.immediate)&&e({storeId:t},i),r=!0});return a.add(i),()=>{a.delete(i),i.dispose()}}}),Object.defineProperty(r,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{Array.from(a).forEach(e=>{e.dispose(),a.delete(e)}),e._s.delete(t)}}),e._p.forEach(n=>{G(e,r,t,n)}),r};function J(e,t){let n=n=>{let r=n||q(),i=r._s.get(e);if(i)return i;let a=ge(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,`$id`,{enumerable:!1,configurable:!0,value:e}),n}var Y=3,_e=6,ve=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ye=[{id:`all`,label:`全部`,hint:`默认值不会写入 URL。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],be=0,xe=J(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),X=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},Z=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},Se=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,Ce=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,Z(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,Z(t[2]??null))};let i=()=>{e(`popstate`,Z())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},we=()=>{let e=he();e.use(W({stores:{"store-query-sync-demo":{q:{path:`search`,parser:A.withDefault(``),limitUrlUpdates:k(500)},tab:{parser:A.withDefault(`all`),history:`push`,limitUrlUpdates:se(180)},page:{parser:j.withDefault(1),history:`push`,limitUrlUpdates:se(180)}}}}));let t=xe(e),n=C(`computed:1:0`,()=>p(()=>{let e=t.normalizedSearch;return ve.filter(n=>t.tab===`all`||n.tab===t.tab?e?`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e):!0:!1)})),r=C(`computed:1:1`,()=>p(()=>Math.max(1,Math.ceil(n.get().length/Y))));return{root:e,store:t,filteredItems:n,visibleItems:C(`computed:1:2`,()=>p(()=>{let e=(Math.min(Math.max(1,t.page),r.get())-1)*Y;return n.get().slice(e,e+Y)})),totalPages:r,clampEffect:C(`watchEffect:1:3`,()=>s(()=>{let e=r.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)}))}},Te=w({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
`,Demo:()=>{let{route:t,demo:S,historyRecords:ee,historyRecorderCleanup:w,appendHistoryRecord:T,currentPath:E,currentPage:D,expectedQuery:ie,resetStoreQuery:ae,clearAllUrlParams:oe}=C(`useSetup:0:0`,()=>y(()=>{let e=re(),t=we(),n=C(`ref:1:4`,()=>i([])),r=C(`ref:1:5`,()=>i(null)),a=(e,t)=>{be+=1,n.value=[{id:be,kind:e,href:t},...n.value].slice(0,_e)};m(()=>{r.value=Ce(a)}),l(()=>{r.value?.(),t.clampEffect.dispose(),t.root.dispose()});let o=e.get()?.path||`/examples/store-query-sync`,s=C(`computed:1:6`,()=>p(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),c=C(`computed:1:7`,()=>p(()=>X(t.store))),u=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:n,historyRecorderCleanup:r,appendHistoryRecord:a,currentPath:o,currentPage:s,expectedQuery:c,resetStoreQuery:u,clearAllUrlParams:()=>{if(u(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return h(t=>{let i=a(`div`,t);x(i,`grid gap-6`);let l=a(`div`,i);r(i,l),x(l,`card bg-base-100 shadow`);let p=a(`div`,l);r(l,p),x(p,`card-body gap-4`);let m=a(`div`,p);r(p,m),x(m,`flex flex-wrap items-start justify-between gap-3`);let y=a(`div`,m);r(m,y),x(y,`space-y-2`);let C=a(`h2`,y);r(y,C),x(C,`text-2xl font-semibold`),r(C,e(`Store、Router、Query Sync 串联演示`));let re=a(`p`,y);r(y,re),x(re,`max-w-3xl text-sm leading-6 text-base-content/75`),r(re,e(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let w=a(`div`,m);r(m,w),x(w,`flex flex-wrap gap-2 text-xs`);let T=a(`span`,w);r(w,T),x(T,`rounded-full bg-base-200 px-3 py-1 font-medium`),r(T,e(`当前路由：`));let O=o(`rue:slot:anchor`);r(T,O),s(()=>{let e=E;n(()=>b(e,T,O))});let k=a(`span`,w);r(w,k),x(k,`rounded-full bg-base-200 px-3 py-1 font-medium`),r(k,e(`预期 Query：`));let se=o(`rue:slot:anchor`);r(k,se),s(()=>{let e=ie.get();n(()=>b(e,k,se))});let A=a(`div`,p);r(p,A),x(A,`flex flex-wrap gap-2`);let j=a(`a`,A);r(A,j),s(()=>{u(j,`href`,String(ne.__rueHref(`${E}?q=router&tab=router&page=1`)))}),v(j,`click`,e=>ne.__rueOnClick(e,`${E}?q=router&tab=router&page=1`,!1)),x(j,`btn btn-sm btn-outline`),r(j,e(`Router 预设`));let M=a(`a`,A);r(A,M),s(()=>{u(M,`href`,String(ne.__rueHref(`${E}?q=sync&tab=store&page=1`)))}),v(M,`click`,e=>ne.__rueOnClick(e,`${E}?q=sync&tab=store&page=1`,!1)),x(M,`btn btn-sm btn-outline`),r(M,e(`Store 预设`));let N=a(`a`,A);r(A,N),s(()=>{u(N,`href`,String(ne.__rueHref(`${E}?q=render&tab=runtime&page=1`)))}),v(N,`click`,e=>ne.__rueOnClick(e,`${E}?q=render&tab=runtime&page=1`,!1)),x(N,`btn btn-sm btn-outline`),r(N,e(`Runtime 预设`));let P=a(`button`,A);r(A,P),x(P,`btn btn-sm btn-ghost`),v(P,`click`,ae),r(P,e(`清空 Query`));let F=a(`button`,A);r(A,F),x(F,`btn btn-sm btn-ghost`),v(F,`click`,oe),r(F,e(`清理所有 URL 参数`));let I=a(`div`,i);r(i,I),x(I,`grid gap-6`);let ce=a(`div`,I);r(I,ce),x(ce,`card bg-base-100 shadow`);let L=a(`div`,ce);r(ce,L),x(L,`card-body gap-4`);let R=a(`label`,L);r(L,R),x(R,`form-control gap-2`);let le=a(`span`,R);r(R,le),x(le,`label-text font-medium`),r(le,e(`搜索（debounce 500ms）`));let z=a(`input`,R);r(R,z),x(z,`input input-bordered`),s(()=>{f(z,S.store.search)}),v(z,`input`,e=>{S.store.search=e.target.value,S.store.page=1}),u(z,`placeholder`,`例如：router / sync / render`);let B=a(`div`,L);r(L,B),x(B,`grid gap-2`);let V=a(`span`,B);r(B,V),x(V,`label-text font-medium`),r(V,e(`分类（throttle 180ms + push）`));let H=a(`div`,B);r(B,H),x(H,`flex flex-wrap gap-2`);let ue=o(`rue:list:start`),de=o(`rue:list:end`);r(H,ue),r(H,de);let U=new Map;s(()=>{U=te({items:ye||[],getKey:(e,t)=>e.id,elements:U,parent:H,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(e,t,i,l,d)=>{b(h(()=>{let t=c(),i=a(`button`,t);r(t,i),s(()=>{u(i,`key`,String(e.id))}),s(()=>{x(i,`btn btn-sm ${S.store.tab===e.id?`btn-primary`:`btn-outline`}`)}),v(i,`click`,()=>{S.store.tab=e.id,S.store.page=1});let l=o(`rue:slot:anchor`);return r(i,l),s(()=>{let t=e.label;n(()=>b(t,i,l))}),t}),t,i)}})});let fe=a(`p`,B);r(B,fe),x(fe,`text-xs leading-5 text-base-content/60`);let pe=d(fe);r(fe,pe),s(()=>{_(pe,ye.find(e=>e.id===S.store.tab)?.hint)});let W=a(`div`,L);r(L,W),x(W,`grid gap-2`);let me=a(`span`,W);r(W,me),x(me,`label-text font-medium`),r(me,e(`分页（throttle 180ms + push）`));let G=a(`div`,W);r(W,G),x(G,`flex items-center gap-2`);let K=a(`button`,G);r(G,K),x(K,`btn btn-sm btn-outline`),s(()=>{g(K,D.get()<=1)}),v(K,`click`,()=>{S.store.page=Math.max(1,D.get()-1)}),r(K,e(`上一页`));let q=a(`span`,G);r(G,q),x(q,`min-w-24 text-center text-sm font-medium`),r(q,e(`第 `));let he=o(`rue:slot:anchor`);r(q,he),s(()=>{let e=D.get();n(()=>b(e,q,he))}),r(q,e(` / `));let ge=o(`rue:slot:anchor`);r(q,ge),s(()=>{let e=S.totalPages.get();n(()=>b(e,q,ge))}),r(q,e(` 页`));let J=a(`button`,G);r(G,J),x(J,`btn btn-sm btn-outline`),s(()=>{g(J,D.get()>=S.totalPages.get())}),v(J,`click`,()=>{S.store.page=Math.min(S.totalPages.get(),D.get()+1)}),r(J,e(`下一页`));let Y=a(`div`,L);r(L,Y),x(Y,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let _e=a(`p`,Y);r(Y,_e),r(_e,e(`本地状态会立刻刷新卡片列表。`));let ve=a(`p`,Y);r(Y,ve),r(ve,e(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let be=a(`p`,Y);r(Y,be),r(be,e(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let xe=a(`p`,Y);r(Y,xe),r(xe,e(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let X=a(`div`,L);r(L,X),x(X,`grid gap-2`);let Z=a(`div`,X);r(X,Z),x(Z,`flex flex-wrap items-center justify-between gap-2`);let Ce=a(`span`,Z);r(Z,Ce),x(Ce,`label-text font-medium`),r(Ce,e(`URL 写入记录`));let we=a(`span`,Z);r(Z,we),x(we,`text-xs text-base-content/60`),r(we,e(`分类 / 分页走 pushState，搜索走 replaceState。`));let Te=o(`rue:slot:anchor`);r(X,Te),s(()=>{let t=ee.value.length?h(()=>{let e=c(),t=a(`ul`,e);r(e,t),x(t,`rounded-2xl border border-base-200 bg-base-100`);let i=o(`rue:list:start`),l=o(`rue:list:end`);r(t,i),r(t,l);let d=new Map;return s(()=>{d=te({items:ee.value||[],getKey:(e,t)=>e.id,elements:d,parent:t,before:l,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,t,i,l,d)=>{b(h(()=>{let t=c(),i=a(`li`,t);r(t,i),s(()=>{u(i,`key`,String(e.id))}),x(i,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let l=a(`span`,i);r(i,l),s(()=>{x(l,`badge badge-sm ${e.kind===`push`?`badge-primary`:e.kind===`replace`?`badge-ghost`:`badge-outline`}`)});let d=o(`rue:slot:anchor`);r(l,d),s(()=>{let t=Se(e.kind);n(()=>b(t,l,d))});let f=a(`span`,i);r(i,f),x(f,`font-mono text-xs text-base-content/70`);let p=o(`rue:slot:anchor`);return r(f,p),s(()=>{let t=e.href;n(()=>b(t,f,p))}),t}),t,i)}})}),e}):h(()=>{let t=c(),n=a(`div`,t);return r(t,n),x(n,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),r(n,e(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),t});n(()=>b(t,X,Te))});let Ee=a(`div`,I);r(I,Ee),x(Ee,`card bg-base-100 shadow`);let De=a(`div`,Ee);r(Ee,De),x(De,`card-body gap-4`);let Oe=a(`div`,De);r(De,Oe),x(Oe,`flex flex-col gap-3`);let ke=a(`div`,Oe);r(Oe,ke);let Ae=a(`h3`,ke);r(ke,Ae),x(Ae,`text-xl font-semibold`),r(Ae,e(`筛选结果`));let Q=a(`p`,ke);r(ke,Q),x(Q,`text-sm text-base-content/70`),r(Q,e(`共 `));let je=o(`rue:slot:anchor`);r(Q,je),s(()=>{let e=S.filteredItems.get().length;n(()=>b(e,Q,je))}),r(Q,e(` 条，当前展示 `));let Me=o(`rue:slot:anchor`);r(Q,Me),s(()=>{let e=S.visibleItems.get().length;n(()=>b(e,Q,Me))});let Ne=d(Q);r(Q,Ne),_(Ne,` `),r(Q,e(`条。`));let $=a(`div`,Oe);r(Oe,$),x($,`flex flex-wrap gap-2 text-xs`);let Pe=a(`span`,$);r($,Pe),x(Pe,`rounded-full bg-base-200 px-3 py-1`),r(Pe,e(`search=`));let Fe=o(`rue:slot:anchor`);r(Pe,Fe),s(()=>{let e=S.store.search||`(空)`;n(()=>b(e,Pe,Fe))});let Ie=a(`span`,$);r($,Ie),x(Ie,`rounded-full bg-base-200 px-3 py-1`),r(Ie,e(`tab=`));let Le=o(`rue:slot:anchor`);r(Ie,Le),s(()=>{let e=S.store.tab;n(()=>b(e,Ie,Le))});let Re=a(`span`,$);r($,Re),x(Re,`rounded-full bg-base-200 px-3 py-1`),r(Re,e(`page=`));let ze=o(`rue:slot:anchor`);r(Re,ze),s(()=>{let e=D.get();n(()=>b(e,Re,ze))});let Be=o(`rue:slot:anchor`);return r(De,Be),s(()=>{let t=S.visibleItems.get().length?h(()=>{let e=c(),t=a(`div`,e);r(e,t),x(t,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let i=o(`rue:list:start`),l=o(`rue:list:end`);r(t,i),r(t,l);let d=new Map;return s(()=>{d=te({items:S.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:d,parent:t,before:l,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,t,i,l,d)=>{b(h(()=>{let t=c(),i=a(`article`,t);r(t,i),s(()=>{u(i,`key`,String(e.id))}),x(i,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let l=a(`div`,i);r(i,l),x(l,`mb-3 flex items-center justify-between gap-3`);let d=a(`span`,l);r(l,d),x(d,`badge badge-outline`);let f=o(`rue:slot:anchor`);r(d,f),s(()=>{let t=e.badge;n(()=>b(t,d,f))});let p=a(`span`,l);r(l,p),x(p,`text-xs text-base-content/50`);let m=o(`rue:slot:anchor`);r(p,m),s(()=>{let t=e.id;n(()=>b(t,p,m))});let h=a(`h4`,i);r(i,h),x(h,`text-base font-semibold leading-6`);let g=o(`rue:slot:anchor`);r(h,g),s(()=>{let t=e.title;n(()=>b(t,h,g))});let _=a(`p`,i);r(i,_),x(_,`mt-2 text-sm leading-6 text-base-content/70`);let v=o(`rue:slot:anchor`);return r(_,v),s(()=>{let t=e.teaser;n(()=>b(t,_,v))}),t}),t,i)}})}),e}):h(()=>{let t=c(),n=a(`div`,t);return r(t,n),x(n,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),r(n,e(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),t});n(()=>b(t,De,Be))}),i})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Te as default};