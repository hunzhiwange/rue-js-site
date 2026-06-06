import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,a as l,at as u,ht as d,i as f,it as p,l as m,lt as h,mt as g,s as _,tt as v,wt as y,x as b,yt as x,z as S}from"./vapor-runtime-C1rlwc61.js";import{a as C,n as ee}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as w,s as te}from"./src-nJ7Qboh5.js";import{t as ne}from"./createHomeSplitExamplePage-BftZ6-s2.js";var T=new WeakMap,E=null,D=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,O=e=>{if(!D(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},re=e=>D(e)&&`value`in e,ie=e=>typeof e.get==`function`?e.get():e.value,k=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return k({...e,defaultValue:t})}}),ae=e=>({mode:`debounce`,wait:e}),A=e=>({mode:`throttle`,wait:e}),oe=k({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),j=k({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});k({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),k({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var M=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},se=e=>{let t=M(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},N=(e,t=new WeakMap)=>{if(!D(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(N(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!O(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=N(e[r],t)}),n},P=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(O(i)&&O(r)){P(i,r);return}e[n]=N(r)})},F=e=>Array.isArray(e)?e.slice():[e],I=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},L=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!D(n))return;n=n[t[e]]}return n},R=e=>D(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,z=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},ce=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return z(e,t)===z(e,n)},B=e=>{if(e.defaultValue!==void 0)return N(e.defaultValue)},V=(e,t)=>{if(t==null){let t=B(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=B(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},H=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&ce(e.parser,t,e.parser.defaultValue)?null:z(e.parser,t),U=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=R(r)?{parser:r}:r,a=i.parser||oe;return{queryKey:n,path:F(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:I(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),le=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},ue=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,g()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=V(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=L(e.store.$state,t.path);if(ce(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,H(t,a));return}r.push({path:t.path,value:N(i.value)}),e.lastSerializedByKey.set(t.queryKey,H(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=H(t,L(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{de(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=H(t,L(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(H(n,L(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,g()},Math.max(0,e-t)))},g=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=H(t,L(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},_=()=>{u(),t.forEach(e=>{f(e),p(e)})},v=()=>{!s()||r||(n.addEventListener?.(`popstate`,_),r=!0)},y=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,_),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=U(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),v(),p(o),a.forEach(e=>{let t=H(e,L(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=H(e,L(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=H(r,L(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=le(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?y():h(),s.call(n)}}),c}},de=(e,t,n)=>{if(t.length===0)return;let r=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],i=t[e+1],a=r[n];D(a)||(r[n]=typeof i==`number`?[]:{}),r=r[n]}let i=t[t.length-1],a=r[i];r[i]=typeof n==`function`?n(a):n},W=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});D(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},fe=e=>{let t=b();t&&T.set(t,e),E=e},G=()=>{let e=b(),t=e&&T.get(e)||E;if(!t)throw Error(`Store root not installed for current application/container`);return t},pe=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{fe(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{W(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),E===n&&(E=null)}};return n},K=(e,t,r)=>{let i=Object.create(null),a=new Map,o=new Set,s=null,c=(e,t)=>{a.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(i,e,n)},l=e=>{!s||a.has(e)||c(e,{get:()=>s[e],set:t=>{s[e]=t}})},u=()=>(s&&Object.keys(s).forEach(l),Array.from(a.keys())),d=new Proxy(Object.create(null),{ownKeys:()=>u(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(l(t),a.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return l(t),a.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;l(t);let r=a.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(l(t),a.has(t)):!1});if(typeof r==`function`){let e=r();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(i,e)});return}if(re(n)){let e=se(n),r={enumerable:!0,configurable:!0,get:()=>ie(n)};e&&(r.set=e=>{n.value=e},a.set(t,{get:()=>ie(n),set:e=>{n.value=e}})),Object.defineProperty(i,t,r);return}c(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=r,t=e.state?e.state():{};s=g(t),Object.keys(t).forEach(l),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let r=h(()=>n.call(i,d));Object.defineProperty(i,t,{enumerable:!0,configurable:!0,get:()=>ie(r)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(i,e)})})}let f=N(d);return Object.defineProperty(i,`$id`,{enumerable:!0,configurable:!0,get:()=>t}),Object.defineProperty(i,`$state`,{enumerable:!0,configurable:!0,get:()=>d,set:e=>{O(e)&&P(d,e)}}),Object.defineProperty(i,`$patch`,{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(d);return}O(e)&&P(d,e)}}),Object.defineProperty(i,`$set`,{enumerable:!1,configurable:!0,value:(e,t)=>{de(d,F(e),t)}}),Object.defineProperty(i,`$reset`,{enumerable:!1,configurable:!0,value:()=>{s&&Object.keys(s).forEach(e=>{e in f||(delete s[e],a.delete(e),delete i[e])}),P(d,N(f))}}),Object.defineProperty(i,`$subscribe`,{enumerable:!1,configurable:!0,value:(e,r)=>{let i=!1,a=n(()=>{let n=N(d);(i||r?.immediate)&&e({storeId:t},n),i=!0});return o.add(a),()=>{o.delete(a),a.dispose()}}}),Object.defineProperty(i,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{Array.from(o).forEach(e=>{e.dispose(),o.delete(e)}),e._s.delete(t)}}),e._p.forEach(n=>{W(e,i,t,n)}),i};function q(e,t){let n=n=>{let r=n||G(),i=r._s.get(e);if(i)return i;let a=K(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,`$id`,{enumerable:!1,configurable:!0,value:e}),n}var J=3,me=6,he=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 选项式写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ge=[{id:`all`,label:`全部`,hint:`默认值会从 URL 里省略。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],Y=0,X=q(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),_e=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},ve=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},ye=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,be=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,ve(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,ve(t[2]??null))};let i=()=>{e(`popstate`,ve())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},xe=()=>{let e=pe();e.use(ue({stores:{"store-query-sync-demo":{q:{path:`search`,parser:oe.withDefault(``),limitUrlUpdates:ae(500)},tab:{parser:oe.withDefault(`all`),history:`push`,limitUrlUpdates:A(180)},page:{parser:j.withDefault(1),history:`push`,limitUrlUpdates:A(180)}}}}));let t=X(e),r=C(`computed:1:0`,()=>h(()=>{let e=t.normalizedSearch;return he.filter(n=>t.tab===`all`||n.tab===t.tab?e?`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e):!0:!1)})),i=C(`computed:1:1`,()=>h(()=>Math.max(1,Math.ceil(r.get().length/J))));return{root:e,store:t,filteredItems:r,visibleItems:C(`computed:1:2`,()=>h(()=>{let e=(Math.min(Math.max(1,t.page),i.get())-1)*J;return r.get().slice(e,e+J)})),totalPages:i,clampEffect:C(`watchEffect:1:3`,()=>n(()=>{let e=i.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)}))}},Z=ne({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
`,Demo:()=>{let{route:g,demo:b,historyRecords:ne,historyRecorderCleanup:T,appendHistoryRecord:E,currentPath:D,currentPage:O,expectedQuery:re,resetStoreQuery:ie,clearAllUrlParams:k}=C(`useSetup:0:0`,()=>y(()=>{let e=te(),t=xe(),n=C(`ref:1:4`,()=>d([])),r=C(`ref:1:5`,()=>d(null)),i=(e,t)=>{Y+=1,n.value=[{id:Y,kind:e,href:t},...n.value].slice(0,me)};f(()=>{r.value=be(i)}),l(()=>{r.value?.(),t.clampEffect.dispose(),t.root.dispose()});let a=e.get()?.path||`/examples/store-query-sync`,o=C(`computed:1:6`,()=>h(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),s=C(`computed:1:7`,()=>h(()=>_e(t.store))),c=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:n,historyRecorderCleanup:r,appendHistoryRecord:i,currentPath:a,currentPage:o,expectedQuery:s,resetStoreQuery:c,clearAllUrlParams:()=>{if(c(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return m(l=>{let d=s(`div`,l);e(d,`grid gap-6`);let f=s(`div`,d);t(d,f),e(f,`card bg-base-100 shadow`);let h=s(`div`,f);t(f,h),e(h,`card-body gap-4`);let g=s(`div`,h);t(h,g),e(g,`flex flex-wrap items-start justify-between gap-3`);let y=s(`div`,g);t(g,y),e(y,`space-y-2`);let C=s(`h2`,y);t(y,C),e(C,`text-2xl font-semibold`),t(C,r(`Store、Router、Query Sync 串联演示`));let te=s(`p`,y);t(y,te),e(te,`max-w-3xl text-sm leading-6 text-base-content/75`),t(te,r(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let T=s(`div`,g);t(g,T),e(T,`flex flex-wrap gap-2 text-xs`);let E=s(`span`,T);t(T,E),e(E,`rounded-full bg-base-200 px-3 py-1 font-medium`),t(E,r(`当前路由：`));let ae=a(E);t(E,ae),n(()=>{u(ae,D)});let A=s(`span`,T);t(T,A),e(A,`rounded-full bg-base-200 px-3 py-1 font-medium`),t(A,r(`预期 Query：`));let oe=a(A);t(A,oe),n(()=>{u(oe,re.get())});let j=s(`div`,h);t(h,j),e(j,`flex flex-wrap gap-2`);let M=s(`a`,j);t(j,M),n(()=>{c(M,`href`,String(w.__rueHref(`${D}?q=router&tab=router&page=1`)))}),S(M,`click`,e=>w.__rueOnClick(e,`${D}?q=router&tab=router&page=1`,!1)),e(M,`btn btn-sm btn-outline`),t(M,r(`Router 预设`));let se=s(`a`,j);t(j,se),n(()=>{c(se,`href`,String(w.__rueHref(`${D}?q=sync&tab=store&page=1`)))}),S(se,`click`,e=>w.__rueOnClick(e,`${D}?q=sync&tab=store&page=1`,!1)),e(se,`btn btn-sm btn-outline`),t(se,r(`Store 预设`));let N=s(`a`,j);t(j,N),n(()=>{c(N,`href`,String(w.__rueHref(`${D}?q=render&tab=runtime&page=1`)))}),S(N,`click`,e=>w.__rueOnClick(e,`${D}?q=render&tab=runtime&page=1`,!1)),e(N,`btn btn-sm btn-outline`),t(N,r(`Runtime 预设`));let P=s(`button`,j);t(j,P),e(P,`btn btn-sm btn-ghost`),S(P,`click`,ie),t(P,r(`清空 Query`));let F=s(`button`,j);t(j,F),e(F,`btn btn-sm btn-ghost`),S(F,`click`,k),t(F,r(`清理所有 URL 参数`));let I=s(`div`,d);t(d,I),e(I,`grid gap-6`);let L=s(`div`,I);t(I,L),e(L,`card bg-base-100 shadow`);let R=s(`div`,L);t(L,R),e(R,`card-body gap-4`);let z=s(`label`,R);t(R,z),e(z,`form-control gap-2`);let ce=s(`span`,z);t(z,ce),e(ce,`label-text font-medium`),t(ce,r(`搜索（debounce 500ms）`));let B=s(`input`,z);t(z,B),e(B,`input input-bordered`),n(()=>{p(B,b.store.search)}),S(B,`input`,e=>{b.store.search=e.target.value,b.store.page=1}),c(B,`placeholder`,`例如：router / sync / render`);let V=s(`div`,R);t(R,V),e(V,`grid gap-2`);let H=s(`span`,V);t(V,H),e(H,`label-text font-medium`),t(H,r(`分类（throttle 180ms + push）`));let U=s(`div`,V);t(V,U),e(U,`flex flex-wrap gap-2`);let le=i(`rue:list:start`),ue=i(`rue:list:end`);t(U,le),t(U,ue);let de=new Map;n(()=>{de=ee({items:ge||[],getKey:(e,t)=>e.id,elements:de,parent:U,before:ue,singleRoot:!0,trackIndex:!1,start:le,renderItem:(r,a,l,u,d)=>{_(m(()=>{let a=o(),l=s(`button`,a);t(a,l),n(()=>{c(l,`key`,String(r.id))}),n(()=>{e(l,String(`btn btn-sm ${b.store.tab===r.id?`btn-primary`:`btn-outline`}`))}),S(l,`click`,()=>{b.store.tab=r.id,b.store.page=1});let u=i(`rue:slot:anchor`);return t(l,u),n(()=>{let e=r.label;x(()=>_(e,l,u))}),a}),a,l)}})});let W=s(`p`,V);t(V,W),e(W,`text-xs leading-5 text-base-content/60`);let fe=a(W);t(W,fe),n(()=>{u(fe,ge.find(e=>e.id===b.store.tab)?.hint)});let G=s(`div`,R);t(R,G),e(G,`grid gap-2`);let pe=s(`span`,G);t(G,pe),e(pe,`label-text font-medium`),t(pe,r(`分页（throttle 180ms + push）`));let K=s(`div`,G);t(G,K),e(K,`flex items-center gap-2`);let q=s(`button`,K);t(K,q),e(q,`btn btn-sm btn-outline`),n(()=>{v(q,O.get()<=1)}),S(q,`click`,()=>{b.store.page=Math.max(1,O.get()-1)}),t(q,r(`上一页`));let J=s(`span`,K);t(K,J),e(J,`min-w-24 text-center text-sm font-medium`),t(J,r(`第 `));let me=a(J);t(J,me),n(()=>{u(me,O.get())}),t(J,r(` / `));let he=a(J);t(J,he),n(()=>{u(he,b.totalPages.get())}),t(J,r(` 页`));let Y=s(`button`,K);t(K,Y),e(Y,`btn btn-sm btn-outline`),n(()=>{v(Y,O.get()>=b.totalPages.get())}),S(Y,`click`,()=>{b.store.page=Math.min(b.totalPages.get(),O.get()+1)}),t(Y,r(`下一页`));let X=s(`div`,R);t(R,X),e(X,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let _e=s(`p`,X);t(X,_e),t(_e,r(`本地状态会立刻刷新卡片列表。`));let ve=s(`p`,X);t(X,ve),t(ve,r(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let be=s(`p`,X);t(X,be),t(be,r(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let xe=s(`p`,X);t(X,xe),t(xe,r(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let Z=s(`div`,R);t(R,Z),e(Z,`grid gap-2`);let Se=s(`div`,Z);t(Z,Se),e(Se,`flex flex-wrap items-center justify-between gap-2`);let Ce=s(`span`,Se);t(Se,Ce),e(Ce,`label-text font-medium`),t(Ce,r(`URL 写入记录`));let we=s(`span`,Se);t(Se,we),e(we,`text-xs text-base-content/60`),t(we,r(`分类 / 分页走 pushState，搜索走 replaceState。`));let Te=i(`rue:slot:anchor`);t(Z,Te),n(()=>{let a=ne.value.length?m(()=>{let r=o(),a=s(`ul`,r);t(r,a),e(a,`rounded-2xl border border-base-200 bg-base-100`);let l=i(`rue:list:start`),u=i(`rue:list:end`);t(a,l),t(a,u);let d=new Map;return n(()=>{d=ee({items:ne.value||[],getKey:(e,t)=>e.id,elements:d,parent:a,before:u,singleRoot:!0,trackIndex:!1,start:l,renderItem:(r,a,l,u,d)=>{_(m(()=>{let a=o(),l=s(`li`,a);t(a,l),n(()=>{c(l,`key`,String(r.id))}),e(l,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let u=s(`span`,l);t(l,u),n(()=>{e(u,String(`badge badge-sm ${r.kind===`push`?`badge-primary`:r.kind===`replace`?`badge-ghost`:`badge-outline`}`))});let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let e=ye(r.kind);x(()=>_(e,u,d))});let f=s(`span`,l);t(l,f),e(f,`font-mono text-xs text-base-content/70`);let p=i(`rue:slot:anchor`);return t(f,p),n(()=>{let e=r.href;x(()=>_(e,f,p))}),a}),a,l)}})}),r}):m(()=>{let n=o(),i=s(`div`,n);return t(n,i),e(i,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),t(i,r(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),n});x(()=>_(a,Z,Te))});let Ee=s(`div`,I);t(I,Ee),e(Ee,`card bg-base-100 shadow`);let De=s(`div`,Ee);t(Ee,De),e(De,`card-body gap-4`);let Oe=s(`div`,De);t(De,Oe),e(Oe,`flex flex-col gap-3`);let ke=s(`div`,Oe);t(Oe,ke);let Ae=s(`h3`,ke);t(ke,Ae),e(Ae,`text-xl font-semibold`),t(Ae,r(`筛选结果`));let Q=s(`p`,ke);t(ke,Q),e(Q,`text-sm text-base-content/70`),t(Q,r(`共 `));let je=i(`rue:slot:anchor`);t(Q,je),n(()=>{let e=b.filteredItems.get().length;x(()=>_(e,Q,je))}),t(Q,r(` 条，当前展示 `));let Me=i(`rue:slot:anchor`);t(Q,Me),n(()=>{let e=b.visibleItems.get().length;x(()=>_(e,Q,Me))});let Ne=a(Q);t(Q,Ne),u(Ne,` `),t(Q,r(`条。`));let $=s(`div`,Oe);t(Oe,$),e($,`flex flex-wrap gap-2 text-xs`);let Pe=s(`span`,$);t($,Pe),e(Pe,`rounded-full bg-base-200 px-3 py-1`),t(Pe,r(`search=`));let Fe=i(`rue:slot:anchor`);t(Pe,Fe),n(()=>{let e=b.store.search||`(空)`;x(()=>_(e,Pe,Fe))});let Ie=s(`span`,$);t($,Ie),e(Ie,`rounded-full bg-base-200 px-3 py-1`),t(Ie,r(`tab=`));let Le=i(`rue:slot:anchor`);t(Ie,Le),n(()=>{let e=b.store.tab;x(()=>_(e,Ie,Le))});let Re=s(`span`,$);t($,Re),e(Re,`rounded-full bg-base-200 px-3 py-1`),t(Re,r(`page=`));let ze=a(Re);t(Re,ze),n(()=>{u(ze,O.get())});let Be=i(`rue:slot:anchor`);return t(De,Be),n(()=>{let a=b.visibleItems.get().length?m(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let l=i(`rue:list:start`),u=i(`rue:list:end`);t(a,l),t(a,u);let d=new Map;return n(()=>{d=ee({items:b.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:d,parent:a,before:u,singleRoot:!0,trackIndex:!1,start:l,renderItem:(r,a,l,u,d)=>{_(m(()=>{let a=o(),l=s(`article`,a);t(a,l),n(()=>{c(l,`key`,String(r.id))}),e(l,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let u=s(`div`,l);t(l,u),e(u,`mb-3 flex items-center justify-between gap-3`);let d=s(`span`,u);t(u,d),e(d,`badge badge-outline`);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let e=r.badge;x(()=>_(e,d,f))});let p=s(`span`,u);t(u,p),e(p,`text-xs text-base-content/50`);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let e=r.id;x(()=>_(e,p,m))});let h=s(`h4`,l);t(l,h),e(h,`text-base font-semibold leading-6`);let g=i(`rue:slot:anchor`);t(h,g),n(()=>{let e=r.title;x(()=>_(e,h,g))});let v=s(`p`,l);t(l,v),e(v,`mt-2 text-sm leading-6 text-base-content/70`);let y=i(`rue:slot:anchor`);return t(v,y),n(()=>{let e=r.teaser;x(()=>_(e,v,y))}),a}),a,l)}})}),r}):m(()=>{let n=o(),i=s(`div`,n);return t(n,i),e(i,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),t(i,r(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),n});x(()=>_(a,De,Be))}),d})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Z as default};