import{$ as e,Ct as t,J as n,Kt as r,Lt as i,Q as a,T as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,d as f,et as p,gt as m,l as h,mt as g,o as _,ot as v,pt as y,s as b,tt as x,ut as ee}from"./vapor-runtime-BR_2rwNk.js";import{a as S,n as te}from"./vapor-helpers-vapor-DkadWylb.js";import{n as ne,s as re}from"./src-DL2I7l-s.js";import{t as ie}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var C=new WeakMap,w=null,T=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,E=e=>{if(!T(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},ae=e=>T(e)&&`value`in e,oe=e=>typeof e.get==`function`?e.get():e.value,D=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return D({...e,defaultValue:t})}}),se=e=>({mode:`debounce`,wait:e}),O=e=>({mode:`throttle`,wait:e}),ce=D({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),k=D({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});D({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),D({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var A=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},j=e=>{let t=A(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},M=(e,t=new WeakMap)=>{if(!T(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(M(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!E(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=M(e[r],t)}),n},N=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(E(i)&&E(r)){N(i,r);return}e[n]=M(r)})},P=e=>Array.isArray(e)?e.slice():[e],F=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},I=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!T(n))return;n=n[t[e]]}return n},L=e=>T(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,R=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},le=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return R(e,t)===R(e,n)},z=e=>{if(e.defaultValue!==void 0)return M(e.defaultValue)},B=(e,t)=>{if(t==null){let t=z(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=z(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},V=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&le(e.parser,t,e.parser.defaultValue)?null:R(e.parser,t),H=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=L(r)?{parser:r}:r,a=i.parser||ce;return{queryKey:n,path:P(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:F(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),ue=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},de=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,g()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=B(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=I(e.store.$state,t.path);if(le(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,V(t,a));return}r.push({path:t.path,value:M(i.value)}),e.lastSerializedByKey.set(t.queryKey,V(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=V(t,I(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{fe(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=V(t,I(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(V(n,I(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,g()},Math.max(0,e-t)))},g=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=V(t,I(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},_=()=>{u(),t.forEach(e=>{f(e),p(e)})},v=()=>{!s()||r||(n.addEventListener?.(`popstate`,_),r=!0)},y=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,_),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=H(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),v(),p(o),a.forEach(e=>{let t=V(e,I(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=V(e,I(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=V(r,I(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=ue(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?y():h(),s.call(n)}}),c}},fe=(e,t,n)=>{if(t.length===0)return;let r=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],i=t[e+1],a=r[n];T(a)||(r[n]=typeof i==`number`?[]:{}),r=r[n]}let i=t[t.length-1],a=r[i];r[i]=typeof n==`function`?n(a):n},U=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});T(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},pe=e=>{let t=o();t&&C.set(t,e),w=e},W=()=>{let e=o(),t=e&&C.get(e)||w;if(!t)throw Error(`Store root not installed for current application/container`);return t},me=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{pe(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{U(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),w===n&&(w=null)}};return n},G=(e,n,r)=>{let i=Object.create(null),a=new Map,o=new Set,s=null,c=(e,t)=>{a.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(i,e,n)},u=e=>{!s||a.has(e)||c(e,{get:()=>s[e],set:t=>{s[e]=t}})},d=()=>(s&&Object.keys(s).forEach(u),Array.from(a.keys())),f=new Proxy(Object.create(null),{ownKeys:()=>d(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(u(t),a.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return u(t),a.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;u(t);let r=a.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(u(t),a.has(t)):!1});if(typeof r==`function`){let e=r();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(i,e)});return}if(ae(n)){let e=j(n),r={enumerable:!0,configurable:!0,get:()=>oe(n)};e&&(r.set=e=>{n.value=e},a.set(t,{get:()=>oe(n),set:e=>{n.value=e}})),Object.defineProperty(i,t,r);return}c(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=r,n=e.state?e.state():{};s=t(n),Object.keys(n).forEach(u),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let r=m(()=>n.call(i,f));Object.defineProperty(i,t,{enumerable:!0,configurable:!0,get:()=>oe(r)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(i,e)})})}let p=M(f);return Object.defineProperty(i,`$id`,{enumerable:!0,configurable:!0,get:()=>n}),Object.defineProperty(i,`$state`,{enumerable:!0,configurable:!0,get:()=>f,set:e=>{E(e)&&N(f,e)}}),Object.defineProperty(i,`$patch`,{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(f);return}E(e)&&N(f,e)}}),Object.defineProperty(i,`$set`,{enumerable:!1,configurable:!0,value:(e,t)=>{fe(f,P(e),t)}}),Object.defineProperty(i,`$reset`,{enumerable:!1,configurable:!0,value:()=>{s&&Object.keys(s).forEach(e=>{e in p||(delete s[e],a.delete(e),delete i[e])}),N(f,M(p))}}),Object.defineProperty(i,`$subscribe`,{enumerable:!1,configurable:!0,value:(e,t)=>{let r=!1,i=l(()=>{let i=M(f);(r||t?.immediate)&&e({storeId:n},i),r=!0});return o.add(i),()=>{o.delete(i),i.dispose()}}}),Object.defineProperty(i,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{Array.from(o).forEach(e=>{e.dispose(),o.delete(e)}),e._s.delete(n)}}),e._p.forEach(t=>{U(e,i,n,t)}),i};function K(e,t){let n=n=>{let r=n||W(),i=r._s.get(e);if(i)return i;let a=G(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,`$id`,{enumerable:!1,configurable:!0,value:e}),n}var q=3,he=6,ge=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 选项式写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],_e=[{id:`all`,label:`全部`,hint:`默认值会从 URL 里省略。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],J=0,Y=K(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),ve=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},ye=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},be=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,xe=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,ye(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,ye(t[2]??null))};let i=()=>{e(`popstate`,ye())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},Se=()=>{let e=me();e.use(de({stores:{"store-query-sync-demo":{q:{path:`search`,parser:ce.withDefault(``),limitUrlUpdates:se(500)},tab:{parser:ce.withDefault(`all`),history:`push`,limitUrlUpdates:O(180)},page:{parser:k.withDefault(1),history:`push`,limitUrlUpdates:O(180)}}}}));let t=Y(e),n=S(`computed:1:0`,()=>m(()=>{let e=t.normalizedSearch;return ge.filter(n=>t.tab===`all`||n.tab===t.tab?e?`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e):!0:!1)})),r=S(`computed:1:1`,()=>m(()=>Math.max(1,Math.ceil(n.get().length/q))));return{root:e,store:t,filteredItems:n,visibleItems:S(`computed:1:2`,()=>m(()=>{let e=(Math.min(Math.max(1,t.page),r.get())-1)*q;return n.get().slice(e,e+q)})),totalPages:r,clampEffect:S(`watchEffect:1:3`,()=>l(()=>{let e=r.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)}))}},X=ie({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
`,Demo:()=>{let{route:t,demo:o,historyRecords:ie,historyRecorderCleanup:C,appendHistoryRecord:w,currentPath:T,currentPage:E,expectedQuery:ae,resetStoreQuery:oe,clearAllUrlParams:D}=S(`useSetup:0:0`,()=>r(()=>{let e=re(),t=Se(),n=S(`ref:1:4`,()=>i([])),r=S(`ref:1:5`,()=>i(null)),a=(e,t)=>{J+=1,n.value=[{id:J,kind:e,href:t},...n.value].slice(0,he)};_(()=>{r.value=xe(a)}),b(()=>{r.value?.(),t.clampEffect.dispose(),t.root.dispose()});let o=e.get()?.path||`/examples/store-query-sync`,s=S(`computed:1:6`,()=>m(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),c=S(`computed:1:7`,()=>m(()=>ve(t.store))),l=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:n,historyRecorderCleanup:r,appendHistoryRecord:a,currentPath:o,currentPage:s,expectedQuery:c,resetStoreQuery:l,clearAllUrlParams:()=>{if(l(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return f(t=>{let r=e(`div`,t);d(r,`grid gap-6`);let i=e(`div`,r);c(r,i),d(i,`card bg-base-100 shadow`);let m=e(`div`,i);c(i,m),d(m,`card-body gap-4`);let _=e(`div`,m);c(m,_),d(_,`flex flex-wrap items-start justify-between gap-3`);let b=e(`div`,_);c(_,b),d(b,`space-y-2`);let S=e(`h2`,b);c(b,S),d(S,`text-2xl font-semibold`),c(S,p(`Store、Router、Query Sync 串联演示`));let re=e(`p`,b);c(b,re),d(re,`max-w-3xl text-sm leading-6 text-base-content/75`),c(re,p(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let C=e(`div`,_);c(_,C),d(C,`flex flex-wrap gap-2 text-xs`);let w=e(`span`,C);c(C,w),d(w,`rounded-full bg-base-200 px-3 py-1 font-medium`),c(w,p(`当前路由：`));let se=x(w);c(w,se),l(()=>{g(se,T)});let O=e(`span`,C);c(C,O),d(O,`rounded-full bg-base-200 px-3 py-1 font-medium`),c(O,p(`预期 Query：`));let ce=x(O);c(O,ce),l(()=>{g(ce,ae.get())});let k=e(`div`,m);c(m,k),d(k,`flex flex-wrap gap-2`);let A=e(`a`,k);c(k,A),l(()=>{v(A,`href`,String(ne.__rueHref(`${T}?q=router&tab=router&page=1`)))}),n(A,`click`,e=>ne.__rueOnClick(e,`${T}?q=router&tab=router&page=1`,!1)),d(A,`btn btn-sm btn-outline`),c(A,p(`Router 预设`));let j=e(`a`,k);c(k,j),l(()=>{v(j,`href`,String(ne.__rueHref(`${T}?q=sync&tab=store&page=1`)))}),n(j,`click`,e=>ne.__rueOnClick(e,`${T}?q=sync&tab=store&page=1`,!1)),d(j,`btn btn-sm btn-outline`),c(j,p(`Store 预设`));let M=e(`a`,k);c(k,M),l(()=>{v(M,`href`,String(ne.__rueHref(`${T}?q=render&tab=runtime&page=1`)))}),n(M,`click`,e=>ne.__rueOnClick(e,`${T}?q=render&tab=runtime&page=1`,!1)),d(M,`btn btn-sm btn-outline`),c(M,p(`Runtime 预设`));let N=e(`button`,k);c(k,N),d(N,`btn btn-sm btn-ghost`),n(N,`click`,oe),c(N,p(`清空 Query`));let P=e(`button`,k);c(k,P),d(P,`btn btn-sm btn-ghost`),n(P,`click`,D),c(P,p(`清理所有 URL 参数`));let F=e(`div`,r);c(r,F),d(F,`grid gap-6`);let I=e(`div`,F);c(F,I),d(I,`card bg-base-100 shadow`);let L=e(`div`,I);c(I,L),d(L,`card-body gap-4`);let R=e(`label`,L);c(L,R),d(R,`form-control gap-2`);let le=e(`span`,R);c(R,le),d(le,`label-text font-medium`),c(le,p(`搜索（debounce 500ms）`));let z=e(`input`,R);c(R,z),d(z,`input input-bordered`),l(()=>{y(z,o.store.search)}),n(z,`input`,e=>{o.store.search=e.target.value,o.store.page=1}),v(z,`placeholder`,`例如：router / sync / render`);let B=e(`div`,L);c(L,B),d(B,`grid gap-2`);let V=e(`span`,B);c(B,V),d(V,`label-text font-medium`),c(V,p(`分类（throttle 180ms + push）`));let H=e(`div`,B);c(B,H),d(H,`flex flex-wrap gap-2`);let ue=u(`rue:list:start`),de=u(`rue:list:end`);c(H,ue),c(H,de);let fe=new Map;l(()=>{fe=te({items:_e||[],getKey:(e,t)=>e.id,elements:fe,parent:H,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(t,r,i,p,m)=>{h(f(()=>{let r=a(),i=e(`button`,r);c(r,i),l(()=>{v(i,`key`,String(t.id))}),l(()=>{d(i,String(`btn btn-sm ${o.store.tab===t.id?`btn-primary`:`btn-outline`}`))}),n(i,`click`,()=>{o.store.tab=t.id,o.store.page=1});let f=u(`rue:slot:anchor`);return c(i,f),l(()=>{let e=t.label;s(()=>h(e,i,f))}),r}),r,i)}})});let U=e(`p`,B);c(B,U),d(U,`text-xs leading-5 text-base-content/60`);let pe=x(U);c(U,pe),l(()=>{g(pe,_e.find(e=>e.id===o.store.tab)?.hint)});let W=e(`div`,L);c(L,W),d(W,`grid gap-2`);let me=e(`span`,W);c(W,me),d(me,`label-text font-medium`),c(me,p(`分页（throttle 180ms + push）`));let G=e(`div`,W);c(W,G),d(G,`flex items-center gap-2`);let K=e(`button`,G);c(G,K),d(K,`btn btn-sm btn-outline`),l(()=>{ee(K,E.get()<=1)}),n(K,`click`,()=>{o.store.page=Math.max(1,E.get()-1)}),c(K,p(`上一页`));let q=e(`span`,G);c(G,q),d(q,`min-w-24 text-center text-sm font-medium`),c(q,p(`第 `));let he=x(q);c(q,he),l(()=>{g(he,E.get())}),c(q,p(` / `));let ge=x(q);c(q,ge),l(()=>{g(ge,o.totalPages.get())}),c(q,p(` 页`));let J=e(`button`,G);c(G,J),d(J,`btn btn-sm btn-outline`),l(()=>{ee(J,E.get()>=o.totalPages.get())}),n(J,`click`,()=>{o.store.page=Math.min(o.totalPages.get(),E.get()+1)}),c(J,p(`下一页`));let Y=e(`div`,L);c(L,Y),d(Y,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let ve=e(`p`,Y);c(Y,ve),c(ve,p(`本地状态会立刻刷新卡片列表。`));let ye=e(`p`,Y);c(Y,ye),c(ye,p(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let xe=e(`p`,Y);c(Y,xe),c(xe,p(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let Se=e(`p`,Y);c(Y,Se),c(Se,p(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let X=e(`div`,L);c(L,X),d(X,`grid gap-2`);let Z=e(`div`,X);c(X,Z),d(Z,`flex flex-wrap items-center justify-between gap-2`);let Ce=e(`span`,Z);c(Z,Ce),d(Ce,`label-text font-medium`),c(Ce,p(`URL 写入记录`));let we=e(`span`,Z);c(Z,we),d(we,`text-xs text-base-content/60`),c(we,p(`分类 / 分页走 pushState，搜索走 replaceState。`));let Te=u(`rue:slot:anchor`);c(X,Te),l(()=>{let t=ie.value.length?f(()=>{let t=a(),n=e(`ul`,t);c(t,n),d(n,`rounded-2xl border border-base-200 bg-base-100`);let r=u(`rue:list:start`),i=u(`rue:list:end`);c(n,r),c(n,i);let o=new Map;return l(()=>{o=te({items:ie.value||[],getKey:(e,t)=>e.id,elements:o,parent:n,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`li`,n);c(n,r),l(()=>{v(r,`key`,String(t.id))}),d(r,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let i=e(`span`,r);c(r,i),l(()=>{d(i,String(`badge badge-sm ${t.kind===`push`?`badge-primary`:t.kind===`replace`?`badge-ghost`:`badge-outline`}`))});let o=u(`rue:slot:anchor`);c(i,o),l(()=>{let e=be(t.kind);s(()=>h(e,i,o))});let f=e(`span`,r);c(r,f),d(f,`font-mono text-xs text-base-content/70`);let p=u(`rue:slot:anchor`);return c(f,p),l(()=>{let e=t.href;s(()=>h(e,f,p))}),n}),n,r)}})}),t}):f(()=>{let t=a(),n=e(`div`,t);return c(t,n),d(n,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),c(n,p(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),t});s(()=>h(t,X,Te))});let Ee=e(`div`,F);c(F,Ee),d(Ee,`card bg-base-100 shadow`);let De=e(`div`,Ee);c(Ee,De),d(De,`card-body gap-4`);let Oe=e(`div`,De);c(De,Oe),d(Oe,`flex flex-col gap-3`);let ke=e(`div`,Oe);c(Oe,ke);let Ae=e(`h3`,ke);c(ke,Ae),d(Ae,`text-xl font-semibold`),c(Ae,p(`筛选结果`));let Q=e(`p`,ke);c(ke,Q),d(Q,`text-sm text-base-content/70`),c(Q,p(`共 `));let je=u(`rue:slot:anchor`);c(Q,je),l(()=>{let e=o.filteredItems.get().length;s(()=>h(e,Q,je))}),c(Q,p(` 条，当前展示 `));let Me=u(`rue:slot:anchor`);c(Q,Me),l(()=>{let e=o.visibleItems.get().length;s(()=>h(e,Q,Me))});let Ne=x(Q);c(Q,Ne),g(Ne,` `),c(Q,p(`条。`));let $=e(`div`,Oe);c(Oe,$),d($,`flex flex-wrap gap-2 text-xs`);let Pe=e(`span`,$);c($,Pe),d(Pe,`rounded-full bg-base-200 px-3 py-1`),c(Pe,p(`search=`));let Fe=u(`rue:slot:anchor`);c(Pe,Fe),l(()=>{let e=o.store.search||`(空)`;s(()=>h(e,Pe,Fe))});let Ie=e(`span`,$);c($,Ie),d(Ie,`rounded-full bg-base-200 px-3 py-1`),c(Ie,p(`tab=`));let Le=u(`rue:slot:anchor`);c(Ie,Le),l(()=>{let e=o.store.tab;s(()=>h(e,Ie,Le))});let Re=e(`span`,$);c($,Re),d(Re,`rounded-full bg-base-200 px-3 py-1`),c(Re,p(`page=`));let ze=x(Re);c(Re,ze),l(()=>{g(ze,E.get())});let Be=u(`rue:slot:anchor`);return c(De,Be),l(()=>{let t=o.visibleItems.get().length?f(()=>{let t=a(),n=e(`div`,t);c(t,n),d(n,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let r=u(`rue:list:start`),i=u(`rue:list:end`);c(n,r),c(n,i);let p=new Map;return l(()=>{p=te({items:o.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:p,parent:n,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(t,n,r,i,o)=>{h(f(()=>{let n=a(),r=e(`article`,n);c(n,r),l(()=>{v(r,`key`,String(t.id))}),d(r,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let i=e(`div`,r);c(r,i),d(i,`mb-3 flex items-center justify-between gap-3`);let o=e(`span`,i);c(i,o),d(o,`badge badge-outline`);let f=u(`rue:slot:anchor`);c(o,f),l(()=>{let e=t.badge;s(()=>h(e,o,f))});let p=e(`span`,i);c(i,p),d(p,`text-xs text-base-content/50`);let m=u(`rue:slot:anchor`);c(p,m),l(()=>{let e=t.id;s(()=>h(e,p,m))});let g=e(`h4`,r);c(r,g),d(g,`text-base font-semibold leading-6`);let _=u(`rue:slot:anchor`);c(g,_),l(()=>{let e=t.title;s(()=>h(e,g,_))});let y=e(`p`,r);c(r,y),d(y,`mt-2 text-sm leading-6 text-base-content/70`);let b=u(`rue:slot:anchor`);return c(y,b),l(()=>{let e=t.teaser;s(()=>h(e,y,b))}),n}),n,r)}})}),t}):f(()=>{let t=a(),n=e(`div`,t);return c(t,n),d(n,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),c(n,p(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),t});s(()=>h(t,De,Be))}),r})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{X as default};