import{$ as e,$t as t,Bt as n,Dt as r,Gt as i,Ut as a,X as o,Xt as s,Z as c,ct as l,et as u,ft as d,gt as f,ht as p,i as m,l as h,nt as g,o as _,r as v,rt as ee,tt as y,ut as b,v as te,yt as x}from"./vapor-runtime-CKrmRMZX.js";import{a as S,n as ne}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{n as C,s as re}from"./src-nCPlgyFh.js";import{t as w}from"./createHomeSplitExamplePage-Q644r2Bq.js";var T=new WeakMap,E=null,D=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,ie=e=>{if(!D(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},ae=e=>D(e)&&`value`in e,oe=e=>typeof e.get==`function`?e.get():e.value,O=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return O({...e,defaultValue:t})}}),k=e=>({mode:`debounce`,wait:e}),se=e=>({mode:`throttle`,wait:e}),A=O({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),j=O({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});O({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),O({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var M=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},N=e=>{let t=M(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},P=(e,t=new WeakMap)=>{if(!D(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(P(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!ie(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=P(e[r],t)}),n},F=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(ie(i)&&ie(r)){F(i,r);return}e[n]=P(r)})},I=e=>{let t=a(e);return D(t)?t:e},ce=(e,t)=>{delete e[t];let n=I(e);n!==e&&delete n[t]},L=(e,t)=>{Object.keys(I(e)).forEach(t=>{ce(e,t)}),Object.keys(t).forEach(n=>{e[n]=P(t[n])})},R=e=>Array.isArray(e)?e.slice():[e],le=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},z=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!D(n))return;n=n[t[e]]}return n},B=e=>D(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,V=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},H=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return V(e,t)===V(e,n)},ue=e=>{if(e.defaultValue!==void 0)return P(e.defaultValue)},de=(e,t)=>{if(t==null){let t=ue(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=ue(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},U=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&H(e.parser,t,e.parser.defaultValue)?null:V(e.parser,t),fe=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=B(r)?{parser:r}:r,a=i.parser||A;return{queryKey:n,path:R(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:le(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),pe=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},W=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,g()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=de(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=z(e.store.$state,t.path);if(H(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,U(t,a));return}r.push({path:t.path,value:P(i.value)}),e.lastSerializedByKey.set(t.queryKey,U(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=U(t,z(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{me(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=U(t,z(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(U(n,z(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,g()},Math.max(0,e-t)))},g=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=U(t,z(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},_=()=>{u(),t.forEach(e=>{f(e),p(e)})},v=()=>{!s()||r||(n.addEventListener?.(`popstate`,_),r=!0)},ee=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,_),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=fe(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),v(),p(o),a.forEach(e=>{let t=U(e,z(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=U(e,z(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=U(r,z(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=pe(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?ee():h(),s.call(n)}}),c}},me=(e,t,n)=>{if(t.length===0)return;let r=e=>typeof n==`function`?n(e):n,i=e=>{if(e>=t.length)return r(void 0);let n=t[e],a=typeof n==`number`?[]:{};return a[n]=i(e+1),a},a=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],r=a[n];if(!D(r)){a[n]=i(e+1);return}a=r}let o=t[t.length-1],s=a[o];a[o]=r(s)},G=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});D(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},K=e=>{let t=te();t&&T.set(t,e),E=e},q=()=>{let e=te(),t=e&&T.get(e)||E;if(!t)throw Error(`Store root not installed for current application/container`);return t},he=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{K(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{G(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),E===n&&(E=null)}};return n},ge=(e,n,i)=>{let a=Object.create(null),o=new Map,s=new Set,c=null,l=(e,t)=>{o.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(a,e,n)},u=e=>{!c||o.has(e)||l(e,{get:()=>c[e],set:t=>{c[e]=t}})},d=()=>(c&&Object.keys(c).forEach(u),Array.from(o.keys())),f=new Proxy(Object.create(null),{ownKeys:()=>d(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(u(t),o.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return u(t),o.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;u(t);let r=o.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(u(t),o.has(t)):!1});if(typeof i==`function`){let e=i();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(a,e)});return}if(ae(n)){let e=N(n),r={enumerable:!0,configurable:!0,get:()=>oe(n)};e&&(r.set=e=>{n.value=e},o.set(t,{get:()=>oe(n),set:e=>{n.value=e}})),Object.defineProperty(a,t,r);return}l(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=i,t=e.state?e.state():{};c=r(t),Object.keys(t).forEach(u),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let r=x(()=>n.call(a,f));Object.defineProperty(a,t,{enumerable:!0,configurable:!0,get:()=>oe(r)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(a,e)})})}let p=P(f);return Object.defineProperty(a,`$id`,{enumerable:!0,configurable:!0,get:()=>n}),Object.defineProperty(a,`$state`,{enumerable:!0,configurable:!0,get:()=>f,set:e=>{ie(e)&&F(f,e)}}),Object.defineProperty(a,`$patch`,{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(f);return}ie(e)&&F(f,e)}}),Object.defineProperty(a,`$set`,{enumerable:!1,configurable:!0,value:(e,t)=>{me(f,R(e),t)}}),Object.defineProperty(a,`$reset`,{enumerable:!1,configurable:!0,value:()=>{if(c){L(c,P(p)),Array.from(o.keys()).forEach(e=>{e in p||(delete a[e],o.delete(e))}),Object.keys(p).forEach(u);return}F(f,P(p))}}),Object.defineProperty(a,`$subscribe`,{enumerable:!1,configurable:!0,value:(e,r)=>{let i=!1,a=t(()=>{let t=P(f);(i||r?.immediate)&&e({storeId:n},t),i=!0});return s.add(a),()=>{s.delete(a),a.dispose()}}}),Object.defineProperty(a,`$dispose`,{enumerable:!1,configurable:!0,value:()=>{Array.from(s).forEach(e=>{e.dispose(),s.delete(e)}),e._s.delete(n)}}),e._p.forEach(t=>{G(e,a,n,t)}),a};function J(e,t){let n=n=>{let r=n||q(),i=r._s.get(e);if(i)return i;let a=ge(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,`$id`,{enumerable:!1,configurable:!0,value:e}),n}var Y=3,_e=6,ve=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ye=[{id:`all`,label:`全部`,hint:`默认值不会写入 URL。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],be=0,xe=J(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),X=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},Z=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},Se=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,Ce=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,Z(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,Z(t[2]??null))};let i=()=>{e(`popstate`,Z())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},we=()=>{let e=he();e.use(W({stores:{"store-query-sync-demo":{q:{path:`search`,parser:A.withDefault(``),limitUrlUpdates:k(500)},tab:{parser:A.withDefault(`all`),history:`push`,limitUrlUpdates:se(180)},page:{parser:j.withDefault(1),history:`push`,limitUrlUpdates:se(180)}}}}));let n=xe(e),r=S(`computed:1:0`,()=>x(()=>{let e=n.normalizedSearch;return ve.filter(t=>n.tab===`all`||t.tab===n.tab?e?`${t.title} ${t.teaser} ${t.badge}`.toLowerCase().includes(e):!0:!1)})),i=S(`computed:1:1`,()=>x(()=>Math.max(1,Math.ceil(r.get().length/Y))));return{root:e,store:n,filteredItems:r,visibleItems:S(`computed:1:2`,()=>x(()=>{let e=(Math.min(Math.max(1,n.page),i.get())-1)*Y;return r.get().slice(e,e+Y)})),totalPages:i,clampEffect:S(`watchEffect:1:3`,()=>t(()=>{let e=i.get();if(n.page<1){n.page=1;return}n.page>e&&(n.page=e)}))}},Te=w({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
`,Demo:()=>{let{route:r,demo:a,historyRecords:te,historyRecorderCleanup:w,appendHistoryRecord:T,currentPath:E,currentPage:D,expectedQuery:ie,resetStoreQuery:ae,clearAllUrlParams:oe}=S(`useSetup:0:0`,()=>s(()=>{let e=re(),t=we(),r=S(`ref:1:4`,()=>n([])),i=S(`ref:1:5`,()=>n(null)),a=(e,t)=>{be+=1,r.value=[{id:be,kind:e,href:t},...r.value].slice(0,_e)};v(()=>{i.value=Ce(a)}),m(()=>{i.value?.(),t.clampEffect.dispose(),t.root.dispose()});let o=e.get()?.path||`/examples/store-query-sync`,s=S(`computed:1:6`,()=>x(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),c=S(`computed:1:7`,()=>x(()=>X(t.store))),l=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:r,historyRecorderCleanup:i,appendHistoryRecord:a,currentPath:o,currentPage:s,expectedQuery:c,resetStoreQuery:l,clearAllUrlParams:()=>{if(l(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return h(n=>{let r=y(`div`,n);b(r,`grid gap-6`);let s=y(`div`,r);c(r,s),b(s,`card bg-base-100 shadow`);let m=y(`div`,s);c(s,m),b(m,`card-body gap-4`);let v=y(`div`,m);c(m,v),b(v,`flex flex-wrap items-start justify-between gap-3`);let x=y(`div`,v);c(v,x),b(x,`space-y-2`);let S=y(`h2`,x);c(x,S),b(S,`text-2xl font-semibold`),c(S,g(`Store、Router、Query Sync 串联演示`));let re=y(`p`,x);c(x,re),b(re,`max-w-3xl text-sm leading-6 text-base-content/75`),c(re,g(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let w=y(`div`,v);c(v,w),b(w,`flex flex-wrap gap-2 text-xs`);let T=y(`span`,w);c(w,T),b(T,`rounded-full bg-base-200 px-3 py-1 font-medium`),c(T,g(`当前路由：`));let O=e(`rue:slot:anchor`);c(T,O),t(()=>{let e=E;i(()=>_(e,T,O))});let k=y(`span`,w);c(w,k),b(k,`rounded-full bg-base-200 px-3 py-1 font-medium`),c(k,g(`预期 Query：`));let se=e(`rue:slot:anchor`);c(k,se),t(()=>{let e=ie.get();i(()=>_(e,k,se))});let A=y(`div`,m);c(m,A),b(A,`flex flex-wrap gap-2`);let j=y(`a`,A);c(A,j),t(()=>{l(j,`href`,String(C.__rueHref(`${E}?q=router&tab=router&page=1`)))}),o(j,`click`,e=>C.__rueOnClick(e,`${E}?q=router&tab=router&page=1`,!1)),b(j,`btn btn-sm btn-outline`),c(j,g(`Router 预设`));let M=y(`a`,A);c(A,M),t(()=>{l(M,`href`,String(C.__rueHref(`${E}?q=sync&tab=store&page=1`)))}),o(M,`click`,e=>C.__rueOnClick(e,`${E}?q=sync&tab=store&page=1`,!1)),b(M,`btn btn-sm btn-outline`),c(M,g(`Store 预设`));let N=y(`a`,A);c(A,N),t(()=>{l(N,`href`,String(C.__rueHref(`${E}?q=render&tab=runtime&page=1`)))}),o(N,`click`,e=>C.__rueOnClick(e,`${E}?q=render&tab=runtime&page=1`,!1)),b(N,`btn btn-sm btn-outline`),c(N,g(`Runtime 预设`));let P=y(`button`,A);c(A,P),b(P,`btn btn-sm btn-ghost`),o(P,`click`,ae),c(P,g(`清空 Query`));let F=y(`button`,A);c(A,F),b(F,`btn btn-sm btn-ghost`),o(F,`click`,oe),c(F,g(`清理所有 URL 参数`));let I=y(`div`,r);c(r,I),b(I,`grid gap-6`);let ce=y(`div`,I);c(I,ce),b(ce,`card bg-base-100 shadow`);let L=y(`div`,ce);c(ce,L),b(L,`card-body gap-4`);let R=y(`label`,L);c(L,R),b(R,`form-control gap-2`);let le=y(`span`,R);c(R,le),b(le,`label-text font-medium`),c(le,g(`搜索（debounce 500ms）`));let z=y(`input`,R);c(R,z),b(z,`input input-bordered`),t(()=>{p(z,a.store.search)}),o(z,`input`,e=>{a.store.search=e.target.value,a.store.page=1}),l(z,`placeholder`,`例如：router / sync / render`);let B=y(`div`,L);c(L,B),b(B,`grid gap-2`);let V=y(`span`,B);c(B,V),b(V,`label-text font-medium`),c(V,g(`分类（throttle 180ms + push）`));let H=y(`div`,B);c(B,H),b(H,`flex flex-wrap gap-2`);let ue=e(`rue:list:start`),de=e(`rue:list:end`);c(H,ue),c(H,de);let U=new Map;t(()=>{U=ne({items:ye||[],getKey:(e,t)=>e.id,elements:U,parent:H,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(n,r,s,d,f)=>{_(h(()=>{let r=u(),s=y(`button`,r);c(r,s),t(()=>{l(s,`key`,String(n.id))}),t(()=>{b(s,`btn btn-sm ${a.store.tab===n.id?`btn-primary`:`btn-outline`}`)}),o(s,`click`,()=>{a.store.tab=n.id,a.store.page=1});let d=e(`rue:slot:anchor`);return c(s,d),t(()=>{let e=n.label;i(()=>_(e,s,d))}),r}),r,s)}})});let fe=y(`p`,B);c(B,fe),b(fe,`text-xs leading-5 text-base-content/60`);let pe=ee(fe);c(fe,pe),t(()=>{f(pe,ye.find(e=>e.id===a.store.tab)?.hint)});let W=y(`div`,L);c(L,W),b(W,`grid gap-2`);let me=y(`span`,W);c(W,me),b(me,`label-text font-medium`),c(me,g(`分页（throttle 180ms + push）`));let G=y(`div`,W);c(W,G),b(G,`flex items-center gap-2`);let K=y(`button`,G);c(G,K),b(K,`btn btn-sm btn-outline`),t(()=>{d(K,D.get()<=1)}),o(K,`click`,()=>{a.store.page=Math.max(1,D.get()-1)}),c(K,g(`上一页`));let q=y(`span`,G);c(G,q),b(q,`min-w-24 text-center text-sm font-medium`),c(q,g(`第 `));let he=e(`rue:slot:anchor`);c(q,he),t(()=>{let e=D.get();i(()=>_(e,q,he))}),c(q,g(` / `));let ge=e(`rue:slot:anchor`);c(q,ge),t(()=>{let e=a.totalPages.get();i(()=>_(e,q,ge))}),c(q,g(` 页`));let J=y(`button`,G);c(G,J),b(J,`btn btn-sm btn-outline`),t(()=>{d(J,D.get()>=a.totalPages.get())}),o(J,`click`,()=>{a.store.page=Math.min(a.totalPages.get(),D.get()+1)}),c(J,g(`下一页`));let Y=y(`div`,L);c(L,Y),b(Y,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let _e=y(`p`,Y);c(Y,_e),c(_e,g(`本地状态会立刻刷新卡片列表。`));let ve=y(`p`,Y);c(Y,ve),c(ve,g(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let be=y(`p`,Y);c(Y,be),c(be,g(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let xe=y(`p`,Y);c(Y,xe),c(xe,g(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let X=y(`div`,L);c(L,X),b(X,`grid gap-2`);let Z=y(`div`,X);c(X,Z),b(Z,`flex flex-wrap items-center justify-between gap-2`);let Ce=y(`span`,Z);c(Z,Ce),b(Ce,`label-text font-medium`),c(Ce,g(`URL 写入记录`));let we=y(`span`,Z);c(Z,we),b(we,`text-xs text-base-content/60`),c(we,g(`分类 / 分页走 pushState，搜索走 replaceState。`));let Te=e(`rue:slot:anchor`);c(X,Te),t(()=>{let n=te.value.length?h(()=>{let n=u(),r=y(`ul`,n);c(n,r),b(r,`rounded-2xl border border-base-200 bg-base-100`);let a=e(`rue:list:start`),o=e(`rue:list:end`);c(r,a),c(r,o);let s=new Map;return t(()=>{s=ne({items:te.value||[],getKey:(e,t)=>e.id,elements:s,parent:r,before:o,singleRoot:!0,trackIndex:!1,start:a,renderItem:(n,r,a,o,s)=>{_(h(()=>{let r=u(),a=y(`li`,r);c(r,a),t(()=>{l(a,`key`,String(n.id))}),b(a,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let o=y(`span`,a);c(a,o),t(()=>{b(o,`badge badge-sm ${n.kind===`push`?`badge-primary`:n.kind===`replace`?`badge-ghost`:`badge-outline`}`)});let s=e(`rue:slot:anchor`);c(o,s),t(()=>{let e=Se(n.kind);i(()=>_(e,o,s))});let d=y(`span`,a);c(a,d),b(d,`font-mono text-xs text-base-content/70`);let f=e(`rue:slot:anchor`);return c(d,f),t(()=>{let e=n.href;i(()=>_(e,d,f))}),r}),r,a)}})}),n}):h(()=>{let e=u(),t=y(`div`,e);return c(e,t),b(t,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),c(t,g(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),e});i(()=>_(n,X,Te))});let Ee=y(`div`,I);c(I,Ee),b(Ee,`card bg-base-100 shadow`);let De=y(`div`,Ee);c(Ee,De),b(De,`card-body gap-4`);let Oe=y(`div`,De);c(De,Oe),b(Oe,`flex flex-col gap-3`);let ke=y(`div`,Oe);c(Oe,ke);let Ae=y(`h3`,ke);c(ke,Ae),b(Ae,`text-xl font-semibold`),c(Ae,g(`筛选结果`));let Q=y(`p`,ke);c(ke,Q),b(Q,`text-sm text-base-content/70`),c(Q,g(`共 `));let je=e(`rue:slot:anchor`);c(Q,je),t(()=>{let e=a.filteredItems.get().length;i(()=>_(e,Q,je))}),c(Q,g(` 条，当前展示 `));let Me=e(`rue:slot:anchor`);c(Q,Me),t(()=>{let e=a.visibleItems.get().length;i(()=>_(e,Q,Me))});let Ne=ee(Q);c(Q,Ne),f(Ne,` `),c(Q,g(`条。`));let $=y(`div`,Oe);c(Oe,$),b($,`flex flex-wrap gap-2 text-xs`);let Pe=y(`span`,$);c($,Pe),b(Pe,`rounded-full bg-base-200 px-3 py-1`),c(Pe,g(`search=`));let Fe=e(`rue:slot:anchor`);c(Pe,Fe),t(()=>{let e=a.store.search||`(空)`;i(()=>_(e,Pe,Fe))});let Ie=y(`span`,$);c($,Ie),b(Ie,`rounded-full bg-base-200 px-3 py-1`),c(Ie,g(`tab=`));let Le=e(`rue:slot:anchor`);c(Ie,Le),t(()=>{let e=a.store.tab;i(()=>_(e,Ie,Le))});let Re=y(`span`,$);c($,Re),b(Re,`rounded-full bg-base-200 px-3 py-1`),c(Re,g(`page=`));let ze=e(`rue:slot:anchor`);c(Re,ze),t(()=>{let e=D.get();i(()=>_(e,Re,ze))});let Be=e(`rue:slot:anchor`);return c(De,Be),t(()=>{let n=a.visibleItems.get().length?h(()=>{let n=u(),r=y(`div`,n);c(n,r),b(r,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let o=e(`rue:list:start`),s=e(`rue:list:end`);c(r,o),c(r,s);let d=new Map;return t(()=>{d=ne({items:a.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:d,parent:r,before:s,singleRoot:!0,trackIndex:!1,start:o,renderItem:(n,r,a,o,s)=>{_(h(()=>{let r=u(),a=y(`article`,r);c(r,a),t(()=>{l(a,`key`,String(n.id))}),b(a,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let o=y(`div`,a);c(a,o),b(o,`mb-3 flex items-center justify-between gap-3`);let s=y(`span`,o);c(o,s),b(s,`badge badge-outline`);let d=e(`rue:slot:anchor`);c(s,d),t(()=>{let e=n.badge;i(()=>_(e,s,d))});let f=y(`span`,o);c(o,f),b(f,`text-xs text-base-content/50`);let p=e(`rue:slot:anchor`);c(f,p),t(()=>{let e=n.id;i(()=>_(e,f,p))});let m=y(`h4`,a);c(a,m),b(m,`text-base font-semibold leading-6`);let h=e(`rue:slot:anchor`);c(m,h),t(()=>{let e=n.title;i(()=>_(e,m,h))});let g=y(`p`,a);c(a,g),b(g,`mt-2 text-sm leading-6 text-base-content/70`);let v=e(`rue:slot:anchor`);return c(g,v),t(()=>{let e=n.teaser;i(()=>_(e,g,v))}),r}),r,a)}})}),n}):h(()=>{let e=u(),t=y(`div`,e);return c(e,t),b(t,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),c(t,g(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),e});i(()=>_(n,De,Be))}),r})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Te as default};