import{$ as e,C as t,Et as n,G as r,H as i,J as a,K as o,V as s,W as c,_t as l,d as u,dt as d,gt as f,kt as p,l as m,o as h,ot as ee,q as g,rt as te,s as _,st as v,tt as y,xt as b}from"./vapor-runtime-ACs_OvwU.js";import{a as x,n as ne}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as re,s as ie}from"./src-BVBmFpbo.js";import{t as ae}from"./createHomeSplitExamplePage-DOBN78Vl.js";var S=new WeakMap,C=null,w=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,T=e=>{if(!w(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},oe=e=>w(e)&&`value`in e,se=e=>typeof e.get==`function`?e.get():e.value,E=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return E({...e,defaultValue:t})}}),ce=e=>({mode:`debounce`,wait:e}),D=e=>({mode:`throttle`,wait:e}),le=E({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),O=E({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});E({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),E({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var k=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},A=e=>{let t=k(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},j=(e,t=new WeakMap)=>{if(!w(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(j(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!T(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=j(e[r],t)}),n},M=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(T(i)&&T(r)){M(i,r);return}e[n]=j(r)})},N=e=>Array.isArray(e)?e.slice():[e],P=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},F=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!w(n))return;n=n[t[e]]}return n},I=e=>w(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,L=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},ue=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return L(e,t)===L(e,n)},R=e=>{if(e.defaultValue!==void 0)return j(e.defaultValue)},z=(e,t)=>{if(t==null){let t=R(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=R(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},B=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&ue(e.parser,t,e.parser.defaultValue)?null:L(e.parser,t),V=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=I(r)?{parser:r}:r,a=i.parser||le;return{queryKey:n,path:N(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:P(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),de=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},fe=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,ee()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=z(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=F(e.store.$state,t.path);if(ue(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,B(t,a));return}r.push({path:t.path,value:j(i.value)}),e.lastSerializedByKey.set(t.queryKey,B(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=B(t,F(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{pe(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=B(t,F(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(B(n,F(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,ee()},Math.max(0,e-t)))},ee=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=B(t,F(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},g=()=>{u(),t.forEach(e=>{f(e),p(e)})},te=()=>{!s()||r||(n.addEventListener?.(`popstate`,g),r=!0)},_=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,g),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=V(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),te(),p(o),a.forEach(e=>{let t=B(e,F(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=B(e,F(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=B(r,F(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=de(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?_():h(),s.call(n)}}),c}},pe=(e,t,n)=>{if(t.length===0)return;let r=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],i=t[e+1],a=r[n];w(a)||(r[n]=typeof i==`number`?[]:{}),r=r[n]}let i=t[t.length-1],a=r[i];r[i]=typeof n==`function`?n(a):n},H=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});w(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},me=e=>{let n=t();n&&S.set(n,e),C=e},U=()=>{let e=t(),n=e&&S.get(e)||C;if(!n)throw Error(`Store root not installed for current application/container`);return n},he=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{me(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{H(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),C===n&&(C=null)}};return n},W=(e,t,n)=>{let r=Object.create(null),i=new Map,a=new Set,o=null,s=(e,t)=>{i.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(r,e,n)},c=e=>{!o||i.has(e)||s(e,{get:()=>o[e],set:t=>{o[e]=t}})},l=()=>(o&&Object.keys(o).forEach(c),Array.from(i.keys())),u=new Proxy(Object.create(null),{ownKeys:()=>l(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(c(t),i.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return c(t),i.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;c(t);let r=i.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(c(t),i.has(t)):!1});if(typeof n==`function`){let e=n();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(r,e)});return}if(oe(n)){let e=A(n),a={enumerable:!0,configurable:!0,get:()=>se(n)};e&&(a.set=e=>{n.value=e},i.set(t,{get:()=>se(n),set:e=>{n.value=e}})),Object.defineProperty(r,t,a);return}s(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=n,t=e.state?e.state():{};o=f(t),Object.keys(t).forEach(c),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let i=d(()=>n.call(r,u));Object.defineProperty(r,t,{enumerable:!0,configurable:!0,get:()=>se(i)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(r,e)})})}let m=j(u);return Object.defineProperty(r,`$id`,{enumerable:!0,configurable:!0,get:()=>t}),Object.defineProperty(r,`$state`,{enumerable:!0,configurable:!0,get:()=>u,set:e=>{T(e)&&M(u,e)}}),Object.defineProperty(r,`$patch`,{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(u);return}T(e)&&M(u,e)}}),Object.defineProperty(r,`$set`,{enumerable:!1,configurable:!0,value:(e,t)=>{pe(u,N(e),t)}}),Object.defineProperty(r,`$reset`,{enumerable:!1,configurable:!0,value:()=>{o&&Object.keys(o).forEach(e=>{e in m||(delete o[e],i.delete(e),delete r[e])}),M(u,j(m))}}),Object.defineProperty(r,`$subscribe`,{enumerable:!1,configurable:!0,value:(e,n)=>{let r=!1,i=p(()=>{let i=j(u);(r||n?.immediate)&&e({storeId:t},i),r=!0});return a.add(i),()=>{a.delete(i),i.dispose()}}}),Object.defineProperty(r,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{Array.from(a).forEach(e=>{e.dispose(),a.delete(e)}),e._s.delete(t)}}),e._p.forEach(n=>{H(e,r,t,n)}),r};function G(e,t){let n=n=>{let r=n||U(),i=r._s.get(e);if(i)return i;let a=W(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,`$id`,{enumerable:!1,configurable:!0,value:e}),n}var K=3,ge=6,_e=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 选项式写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ve=[{id:`all`,label:`全部`,hint:`默认值会从 URL 里省略。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],q=0,J=G(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),ye=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},be=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},xe=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,Se=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,be(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,be(t[2]??null))};let i=()=>{e(`popstate`,be())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},Ce=()=>{let e=he();e.use(fe({stores:{"store-query-sync-demo":{q:{path:`search`,parser:le.withDefault(``),limitUrlUpdates:ce(500)},tab:{parser:le.withDefault(`all`),history:`push`,limitUrlUpdates:D(180)},page:{parser:O.withDefault(1),history:`push`,limitUrlUpdates:D(180)}}}}));let t=J(e),n=x(`computed:1:0`,()=>d(()=>{let e=t.normalizedSearch;return _e.filter(n=>t.tab===`all`||n.tab===t.tab?e?`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e):!0:!1)})),r=x(`computed:1:1`,()=>d(()=>Math.max(1,Math.ceil(n.get().length/K))));return{root:e,store:t,filteredItems:n,visibleItems:x(`computed:1:2`,()=>d(()=>{let e=(Math.min(Math.max(1,t.page),r.get())-1)*K;return n.get().slice(e,e+K)})),totalPages:r,clampEffect:x(`watchEffect:1:3`,()=>p(()=>{let e=r.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)}))}},Y=ae({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
    title: 'defineStore 选项式写法',
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
`,Demo:()=>{let{route:t,demo:f,historyRecords:ae,historyRecorderCleanup:S,appendHistoryRecord:C,currentPath:w,currentPage:T,expectedQuery:oe,resetStoreQuery:se,clearAllUrlParams:E}=x(`useSetup:0:0`,()=>n(()=>{let e=ie(),t=Ce(),n=x(`ref:1:4`,()=>l([])),r=x(`ref:1:5`,()=>l(null)),i=(e,t)=>{q+=1,n.value=[{id:q,kind:e,href:t},...n.value].slice(0,ge)};h(()=>{r.value=Se(i)}),_(()=>{r.value?.(),t.clampEffect.dispose(),t.root.dispose()});let a=e.get()?.path||`/examples/store-query-sync`,o=x(`computed:1:6`,()=>d(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),s=x(`computed:1:7`,()=>d(()=>ye(t.store))),c=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:n,historyRecorderCleanup:r,appendHistoryRecord:i,currentPath:a,currentPage:o,expectedQuery:s,resetStoreQuery:c,clearAllUrlParams:()=>{if(c(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return u(t=>{let n=o(`div`,t);y(n,`grid gap-6`);let l=o(`div`,n);i(n,l),y(l,`card bg-base-100 shadow`);let d=o(`div`,l);i(l,d),y(d,`card-body gap-4`);let h=o(`div`,d);i(d,h),y(h,`flex flex-wrap items-start justify-between gap-3`);let _=o(`div`,h);i(h,_),y(_,`space-y-2`);let x=o(`h2`,_);i(_,x),y(x,`text-2xl font-semibold`),i(x,g(`Store、Router、Query Sync 串联演示`));let ie=o(`p`,_);i(_,ie),y(ie,`max-w-3xl text-sm leading-6 text-base-content/75`),i(ie,g(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let S=o(`div`,h);i(h,S),y(S,`flex flex-wrap gap-2 text-xs`);let C=o(`span`,S);i(S,C),y(C,`rounded-full bg-base-200 px-3 py-1 font-medium`),i(C,g(`当前路由：`));let ce=a(C);i(C,ce),p(()=>{v(ce,w)});let D=o(`span`,S);i(S,D),y(D,`rounded-full bg-base-200 px-3 py-1 font-medium`),i(D,g(`预期 Query：`));let le=a(D);i(D,le),p(()=>{v(le,oe.get())});let O=o(`div`,d);i(d,O),y(O,`flex flex-wrap gap-2`);let k=o(`a`,O);i(O,k),p(()=>{e(k,`href`,String(re.__rueHref(`${w}?q=router&tab=router&page=1`)))}),s(k,`click`,e=>re.__rueOnClick(e,`${w}?q=router&tab=router&page=1`,!1)),y(k,`btn btn-sm btn-outline`),i(k,g(`Router 预设`));let A=o(`a`,O);i(O,A),p(()=>{e(A,`href`,String(re.__rueHref(`${w}?q=sync&tab=store&page=1`)))}),s(A,`click`,e=>re.__rueOnClick(e,`${w}?q=sync&tab=store&page=1`,!1)),y(A,`btn btn-sm btn-outline`),i(A,g(`Store 预设`));let j=o(`a`,O);i(O,j),p(()=>{e(j,`href`,String(re.__rueHref(`${w}?q=render&tab=runtime&page=1`)))}),s(j,`click`,e=>re.__rueOnClick(e,`${w}?q=render&tab=runtime&page=1`,!1)),y(j,`btn btn-sm btn-outline`),i(j,g(`Runtime 预设`));let M=o(`button`,O);i(O,M),y(M,`btn btn-sm btn-ghost`),s(M,`click`,se),i(M,g(`清空 Query`));let N=o(`button`,O);i(O,N),y(N,`btn btn-sm btn-ghost`),s(N,`click`,E),i(N,g(`清理所有 URL 参数`));let P=o(`div`,n);i(n,P),y(P,`grid gap-6`);let F=o(`div`,P);i(P,F),y(F,`card bg-base-100 shadow`);let I=o(`div`,F);i(F,I),y(I,`card-body gap-4`);let L=o(`label`,I);i(I,L),y(L,`form-control gap-2`);let ue=o(`span`,L);i(L,ue),y(ue,`label-text font-medium`),i(ue,g(`搜索（debounce 500ms）`));let R=o(`input`,L);i(L,R),y(R,`input input-bordered`),p(()=>{ee(R,f.store.search)}),s(R,`input`,e=>{f.store.search=e.target.value,f.store.page=1}),e(R,`placeholder`,`例如：router / sync / render`);let z=o(`div`,I);i(I,z),y(z,`grid gap-2`);let B=o(`span`,z);i(z,B),y(B,`label-text font-medium`),i(B,g(`分类（throttle 180ms + push）`));let V=o(`div`,z);i(z,V),y(V,`flex flex-wrap gap-2`);let de=c(`rue:list:start`),fe=c(`rue:list:end`);i(V,de),i(V,fe);let pe=new Map;p(()=>{pe=ne({items:ve||[],getKey:(e,t)=>e.id,elements:pe,parent:V,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(t,n,a,l,d)=>{m(u(()=>{let n=r(),a=o(`button`,n);i(n,a),p(()=>{e(a,`key`,String(t.id))}),p(()=>{y(a,String(`btn btn-sm ${f.store.tab===t.id?`btn-primary`:`btn-outline`}`))}),s(a,`click`,()=>{f.store.tab=t.id,f.store.page=1});let l=c(`rue:slot:anchor`);return i(a,l),p(()=>{let e=t.label;b(()=>m(e,a,l))}),n}),n,a)}})});let H=o(`p`,z);i(z,H),y(H,`text-xs leading-5 text-base-content/60`);let me=a(H);i(H,me),p(()=>{v(me,ve.find(e=>e.id===f.store.tab)?.hint)});let U=o(`div`,I);i(I,U),y(U,`grid gap-2`);let he=o(`span`,U);i(U,he),y(he,`label-text font-medium`),i(he,g(`分页（throttle 180ms + push）`));let W=o(`div`,U);i(U,W),y(W,`flex items-center gap-2`);let G=o(`button`,W);i(W,G),y(G,`btn btn-sm btn-outline`),p(()=>{te(G,T.get()<=1)}),s(G,`click`,()=>{f.store.page=Math.max(1,T.get()-1)}),i(G,g(`上一页`));let K=o(`span`,W);i(W,K),y(K,`min-w-24 text-center text-sm font-medium`),i(K,g(`第 `));let ge=a(K);i(K,ge),p(()=>{v(ge,T.get())}),i(K,g(` / `));let _e=a(K);i(K,_e),p(()=>{v(_e,f.totalPages.get())}),i(K,g(` 页`));let q=o(`button`,W);i(W,q),y(q,`btn btn-sm btn-outline`),p(()=>{te(q,T.get()>=f.totalPages.get())}),s(q,`click`,()=>{f.store.page=Math.min(f.totalPages.get(),T.get()+1)}),i(q,g(`下一页`));let J=o(`div`,I);i(I,J),y(J,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let ye=o(`p`,J);i(J,ye),i(ye,g(`本地状态会立刻刷新卡片列表。`));let be=o(`p`,J);i(J,be),i(be,g(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let Se=o(`p`,J);i(J,Se),i(Se,g(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let Ce=o(`p`,J);i(J,Ce),i(Ce,g(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let Y=o(`div`,I);i(I,Y),y(Y,`grid gap-2`);let X=o(`div`,Y);i(Y,X),y(X,`flex flex-wrap items-center justify-between gap-2`);let we=o(`span`,X);i(X,we),y(we,`label-text font-medium`),i(we,g(`URL 写入记录`));let Te=o(`span`,X);i(X,Te),y(Te,`text-xs text-base-content/60`),i(Te,g(`分类 / 分页走 pushState，搜索走 replaceState。`));let Ee=c(`rue:slot:anchor`);i(Y,Ee),p(()=>{let t=ae.value.length?u(()=>{let t=r(),n=o(`ul`,t);i(t,n),y(n,`rounded-2xl border border-base-200 bg-base-100`);let a=c(`rue:list:start`),s=c(`rue:list:end`);i(n,a),i(n,s);let l=new Map;return p(()=>{l=ne({items:ae.value||[],getKey:(e,t)=>e.id,elements:l,parent:n,before:s,singleRoot:!0,trackIndex:!1,start:a,renderItem:(t,n,a,s,l)=>{m(u(()=>{let n=r(),a=o(`li`,n);i(n,a),p(()=>{e(a,`key`,String(t.id))}),y(a,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let s=o(`span`,a);i(a,s),p(()=>{y(s,String(`badge badge-sm ${t.kind===`push`?`badge-primary`:t.kind===`replace`?`badge-ghost`:`badge-outline`}`))});let l=c(`rue:slot:anchor`);i(s,l),p(()=>{let e=xe(t.kind);b(()=>m(e,s,l))});let u=o(`span`,a);i(a,u),y(u,`font-mono text-xs text-base-content/70`);let d=c(`rue:slot:anchor`);return i(u,d),p(()=>{let e=t.href;b(()=>m(e,u,d))}),n}),n,a)}})}),t}):u(()=>{let e=r(),t=o(`div`,e);return i(e,t),y(t,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),i(t,g(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),e});b(()=>m(t,Y,Ee))});let De=o(`div`,P);i(P,De),y(De,`card bg-base-100 shadow`);let Z=o(`div`,De);i(De,Z),y(Z,`card-body gap-4`);let Oe=o(`div`,Z);i(Z,Oe),y(Oe,`flex flex-col gap-3`);let ke=o(`div`,Oe);i(Oe,ke);let Ae=o(`h3`,ke);i(ke,Ae),y(Ae,`text-xl font-semibold`),i(Ae,g(`筛选结果`));let Q=o(`p`,ke);i(ke,Q),y(Q,`text-sm text-base-content/70`),i(Q,g(`共 `));let je=c(`rue:slot:anchor`);i(Q,je),p(()=>{let e=f.filteredItems.get().length;b(()=>m(e,Q,je))}),i(Q,g(` 条，当前展示 `));let Me=c(`rue:slot:anchor`);i(Q,Me),p(()=>{let e=f.visibleItems.get().length;b(()=>m(e,Q,Me))});let Ne=a(Q);i(Q,Ne),v(Ne,` `),i(Q,g(`条。`));let $=o(`div`,Oe);i(Oe,$),y($,`flex flex-wrap gap-2 text-xs`);let Pe=o(`span`,$);i($,Pe),y(Pe,`rounded-full bg-base-200 px-3 py-1`),i(Pe,g(`search=`));let Fe=c(`rue:slot:anchor`);i(Pe,Fe),p(()=>{let e=f.store.search||`(空)`;b(()=>m(e,Pe,Fe))});let Ie=o(`span`,$);i($,Ie),y(Ie,`rounded-full bg-base-200 px-3 py-1`),i(Ie,g(`tab=`));let Le=c(`rue:slot:anchor`);i(Ie,Le),p(()=>{let e=f.store.tab;b(()=>m(e,Ie,Le))});let Re=o(`span`,$);i($,Re),y(Re,`rounded-full bg-base-200 px-3 py-1`),i(Re,g(`page=`));let ze=a(Re);i(Re,ze),p(()=>{v(ze,T.get())});let Be=c(`rue:slot:anchor`);return i(Z,Be),p(()=>{let t=f.visibleItems.get().length?u(()=>{let t=r(),n=o(`div`,t);i(t,n),y(n,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let a=c(`rue:list:start`),s=c(`rue:list:end`);i(n,a),i(n,s);let l=new Map;return p(()=>{l=ne({items:f.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:l,parent:n,before:s,singleRoot:!0,trackIndex:!1,start:a,renderItem:(t,n,a,s,l)=>{m(u(()=>{let n=r(),a=o(`article`,n);i(n,a),p(()=>{e(a,`key`,String(t.id))}),y(a,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let s=o(`div`,a);i(a,s),y(s,`mb-3 flex items-center justify-between gap-3`);let l=o(`span`,s);i(s,l),y(l,`badge badge-outline`);let u=c(`rue:slot:anchor`);i(l,u),p(()=>{let e=t.badge;b(()=>m(e,l,u))});let d=o(`span`,s);i(s,d),y(d,`text-xs text-base-content/50`);let f=c(`rue:slot:anchor`);i(d,f),p(()=>{let e=t.id;b(()=>m(e,d,f))});let h=o(`h4`,a);i(a,h),y(h,`text-base font-semibold leading-6`);let ee=c(`rue:slot:anchor`);i(h,ee),p(()=>{let e=t.title;b(()=>m(e,h,ee))});let g=o(`p`,a);i(a,g),y(g,`mt-2 text-sm leading-6 text-base-content/70`);let te=c(`rue:slot:anchor`);return i(g,te),p(()=>{let e=t.teaser;b(()=>m(e,g,te))}),n}),n,a)}})}),t}):u(()=>{let e=r(),t=o(`div`,e);return i(e,t),y(t,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),i(t,g(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),e});b(()=>m(t,Z,Be))}),n})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Y as default};