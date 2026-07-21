import{Cn as e,Ct as t,Dt as n,Kt as r,Lt as i,Mt as a,Tt as o,dt as s,f as c,ft as l,gn as u,ht as d,jt as f,mt as p,ot as m,pn as h,pt as g,st as _,tn as v,vn as y}from"./context-8lXZvIn-.js";import{i as b,l as x,o as S,r as C}from"./vapor-runtime-ygJWVcNn.js";import{a as w,n as ee}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as T,s as te}from"./src-DnK6Cdoa.js";import{t as E}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var D=new WeakMap,O=null,k=e=>(typeof e==`object`||typeof e==`function`)&&e!=null,ne=e=>{if(!k(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},re=e=>k(e)&&`value`in e,ie=e=>typeof e.get==`function`?e.get():e.value,A=e=>({parse:e.parse,serialize:e.serialize,equals:e.equals,defaultValue:e.defaultValue,withDefault(t){return A({...e,defaultValue:t})}}),j=e=>({mode:`debounce`,wait:e}),ae=e=>({mode:`throttle`,wait:e}),M=A({parse:e=>e==null?null:String(e),serialize:e=>String(e)}),N=A({parse:e=>{if(e==null||!/^-?\d+$/.test(e))return null;let t=Number.parseInt(e,10);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(Math.trunc(e)):null});A({parse:e=>{if(e==null||e.trim()===``)return null;let t=Number(e);return Number.isFinite(t)?t:null},serialize:e=>Number.isFinite(e)?String(e):null}),A({parse:e=>{if(e==null)return null;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`?!0:t===`0`||t===`false`||t===`no`?!1:null},serialize:e=>e?`1`:`0`,equals:(e,t)=>e===t});var P=(e,t)=>{let n=e;for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}},F=e=>{let t=P(e,`value`);return!!t&&(typeof t.set==`function`||t.writable===!0)},I=(e,t=new WeakMap)=>{if(!k(e))return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){let n=[];return t.set(e,n),e.forEach(e=>{n.push(I(e,t))}),n}if(e instanceof Date)return new Date(e.getTime());if(!ne(e))return e;let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=I(e[r],t)}),n},L=(e,t)=>{Object.keys(t).forEach(n=>{let r=t[n],i=e[n];if(ne(i)&&ne(r)){L(i,r);return}e[n]=I(r)})},R=e=>{let t=u(e);return k(t)?t:e},oe=(e,t)=>{delete e[t];let n=R(e);n!==e&&delete n[t]},z=(e,t)=>{Object.keys(R(e)).forEach(t=>{oe(e,t)}),Object.keys(t).forEach(n=>{e[n]=I(t[n])})},B=e=>Array.isArray(e)?e.slice():[e],se=e=>{if(!e)return null;let t=Number.isFinite(e.wait)?Math.max(0,Math.trunc(e.wait)):0;return t<=0?null:{mode:e.mode,wait:t}},V=(e,t)=>{let n=e;for(let e=0;e<t.length;e+=1){if(!k(n))return;n=n[t[e]]}return n},H=e=>k(e)&&typeof e.parse==`function`&&typeof e.serialize==`function`&&typeof e.withDefault==`function`,U=(e,t)=>{try{let n=e.serialize(t);return n==null?null:String(n)}catch{return null}},W=(e,t,n)=>{if(t===n)return!0;if(typeof e.equals==`function`)try{return e.equals(t,n)}catch{return!1}return U(e,t)===U(e,n)},ce=e=>{if(e.defaultValue!==void 0)return I(e.defaultValue)},le=(e,t)=>{if(t==null){let t=ce(e);return t===void 0?{hasValue:!1}:{hasValue:!0,value:t}}try{let n=e.parse(t);if(n!=null)return{hasValue:!0,value:n}}catch{}let n=ce(e);return n===void 0?{hasValue:!1}:{hasValue:!0,value:n}},G=(e,t)=>!e.writeDefault&&e.parser.defaultValue!==void 0&&W(e.parser,t,e.parser.defaultValue)?null:U(e.parser,t),ue=(e,t)=>Object.keys(e).map(n=>{let r=e[n],i=H(r)?{parser:r}:r,a=i.parser||M;return{queryKey:n,path:B(i.path??n),parser:a,history:i.history||t.history||`replace`,writeDefault:i.writeDefault??t.writeDefaults??!1,limitUrlUpdates:se(i.limitUrlUpdates??t.limitUrlUpdates??null)}}),de=(e,t,n)=>{let r=e.limitUrlUpdates;return r?r.mode===`debounce`?n+r.wait:t.lastFlushedAt<=0||n-t.lastFlushedAt>=r.wait?n:t.lastFlushedAt+r.wait:n},K=e=>{let t=new Map,n=globalThis,r=!1,i=!1,a=null,o=null,s=()=>!!n.location&&!!n.history&&typeof URLSearchParams<`u`&&typeof n.addEventListener==`function`&&typeof n.removeEventListener==`function`,c=()=>n.location?new URL(n.location.href):null,l=e=>`${e.pathname}${e.search}${e.hash}`,u=()=>{a&&=(clearTimeout(a),null),o=null},d=()=>{i||(i=!0,queueMicrotask(()=>{i=!1,g()}))},f=e=>{e.scheduleStateByKey.forEach(e=>{e.dueAt=null})},p=e=>{let t=c();if(!t)return;let n=new URLSearchParams(t.search),r=[];if(e.fields.forEach(t=>{let i=le(t.parser,n.get(t.queryKey));if(!i.hasValue)return;let a=V(e.store.$state,t.path);if(W(t.parser,a,i.value)){e.lastSerializedByKey.set(t.queryKey,G(t,a));return}r.push({path:t.path,value:I(i.value)}),e.lastSerializedByKey.set(t.queryKey,G(t,i.value))}),r.length===0){e.fields.forEach(t=>{let n=G(t,V(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n)});return}e.unsubscribe&&(e.skipNextSubscription=!0),e.store.$patch(e=>{r.forEach(t=>{fe(e,t.path,t.value)})}),e.fields.forEach(t=>{let n=G(t,V(e.store.$state,t.path));e.lastSerializedByKey.set(t.queryKey,n),e.observedSerializedByKey.set(t.queryKey,n),e.scheduleStateByKey.get(t.queryKey).dueAt=null})},m=()=>{let e=null;return t.forEach(t=>{t.fields.forEach(n=>{let r=t.scheduleStateByKey.get(n.queryKey);if(!(!r||r.dueAt==null)){if(G(n,V(t.store.$state,n.path))===(t.lastSerializedByKey.get(n.queryKey)??null)){r.dueAt=null;return}e=e==null?r.dueAt:Math.min(e,r.dueAt)}})}),e},h=()=>{if(!s())return;let e=m();if(e==null){u();return}let t=Date.now();if(e<=t){u(),d();return}a&&o===e||(u(),o=e,a=setTimeout(()=>{a=null,o=null,g()},Math.max(0,e-t)))},g=()=>{u();let e=c();if(!e||!n.history)return;let r=new URLSearchParams(e.search),i=!1,a=!1,o=Date.now();if(t.forEach(e=>{e.fields.forEach(t=>{let n=e.scheduleStateByKey.get(t.queryKey);if(!n)return;let s=G(t,V(e.store.$state,t.path)),c=e.lastSerializedByKey.get(t.queryKey)??null;if(s===c){n.dueAt=null,e.observedSerializedByKey.set(t.queryKey,s);return}if(n.dueAt!=null&&n.dueAt>o)return;let l=r.get(t.queryKey);s===null?l!==null&&(r.delete(t.queryKey),a=!0):l!==s&&(r.set(t.queryKey,s),a=!0),c!==s&&t.history===`push`&&(i=!0),e.lastSerializedByKey.set(t.queryKey,s),e.observedSerializedByKey.set(t.queryKey,s),n.dueAt=null,n.lastFlushedAt=o})}),a){e.search=r.toString()?`?${r.toString()}`:``;let t=l(e);i?n.history.pushState(n.history.state,``,t):n.history.replaceState(n.history.state,``,t)}h()},_=()=>{u(),t.forEach(e=>{f(e),p(e)})},v=()=>{!s()||r||(n.addEventListener?.(`popstate`,_),n.addEventListener?.(`rue:history-change`,_),r=!0)},y=()=>{!r||t.size>0||(n.removeEventListener?.(`popstate`,_),n.removeEventListener?.(`rue:history-change`,_),r=!1,u())};return({store:n,id:r})=>{let i=e.stores[r];if(!i)return;let a=ue(i,e);if(a.length===0)return;let o={store:n,fields:a,unsubscribe:null,lastSerializedByKey:new Map,observedSerializedByKey:new Map,scheduleStateByKey:new Map,skipNextSubscription:!1};a.forEach(e=>{o.scheduleStateByKey.set(e.queryKey,{dueAt:null,lastFlushedAt:0})}),t.set(n,o),v(),p(o),a.forEach(e=>{let t=G(e,V(n.$state,e.path));o.lastSerializedByKey.set(e.queryKey,t),o.observedSerializedByKey.set(e.queryKey,t)}),o.unsubscribe=n.$subscribe(()=>{if(o.skipNextSubscription){o.skipNextSubscription=!1,o.fields.forEach(e=>{let t=G(e,V(n.$state,e.path));o.observedSerializedByKey.set(e.queryKey,t),o.scheduleStateByKey.get(e.queryKey).dueAt=null});return}let e=Date.now(),t=!1;o.fields.forEach(r=>{let i=G(r,V(n.$state,r.path));if((o.observedSerializedByKey.get(r.queryKey)??null)===i)return;o.observedSerializedByKey.set(r.queryKey,i);let a=o.lastSerializedByKey.get(r.queryKey)??null,s=o.scheduleStateByKey.get(r.queryKey);if(a===i){s.dueAt=null;return}s.dueAt=de(r,s,e),t=!0}),t&&h()});let s=n.$dispose,c=Object.create(null);return Object.defineProperty(c,"$dispose",{enumerable:!1,configurable:!0,value:()=>{o.unsubscribe?.(),t.delete(n),f(o),t.size===0?y():h(),s.call(n)}}),c}},fe=(e,t,n)=>{if(t.length===0)return;let r=e=>typeof n==`function`?n(e):n,i=e=>{if(e>=t.length)return r(void 0);let n=t[e],a=typeof n==`number`?[]:{};return a[n]=i(e+1),a},a=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],r=a[n];if(!k(r)){a[n]=i(e+1);return}a=r}let o=t[t.length-1],s=a[o];a[o]=r(s)},q=(e,t,n,r)=>{let i=r({store:t,root:e,id:n});k(i)&&Reflect.ownKeys(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,{...n,configurable:!0})})},pe=e=>{let t=c();t&&D.set(t,e),O=e},J=()=>{let e=c(),t=e&&D.get(e)||O;if(!t)throw Error(`Store root not installed for current application/container`);return t},me=()=>{let e=new Map,t=[],n={_s:e,_p:t,install:(e,t)=>{pe(n)},use:r=>typeof r==`function`?(t.push(r),Array.from(e.entries()).forEach(([e,t])=>{q(n,t,e,r)}),n):n,dispose:()=>{Array.from(e.values()).forEach(e=>{e.$dispose()}),O===n&&(O=null)}};return n},he=(e,t,n)=>{let a=Object.create(null),o=new Map,s=new Set,c=null,l=(e,t)=>{o.set(e,t);let n={enumerable:!0,configurable:!0,get:t.get};t.set&&(n.set=t.set),Object.defineProperty(a,e,n)},u=e=>{!c||o.has(e)||l(e,{get:()=>c[e],set:t=>{c[e]=t}})},d=()=>(c&&Object.keys(c).forEach(u),Array.from(o.keys())),f=new Proxy(Object.create(null),{ownKeys:()=>d(),getOwnPropertyDescriptor:(e,t)=>{if(typeof t==`string`&&(u(t),o.has(t)))return{enumerable:!0,configurable:!0}},get:(e,t)=>{if(typeof t==`string`)return u(t),o.get(t)?.get()},set:(e,t,n)=>{if(typeof t!=`string`)return!1;u(t);let r=o.get(t);return r?.set?(r.set(n),!0):!1},has:(e,t)=>typeof t==`string`?(u(t),o.has(t)):!1});if(typeof n==`function`){let e=n();Object.keys(e).forEach(t=>{let n=e[t];if(typeof n==`function`){Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(a,e)});return}if(re(n)){let e=F(n),r={enumerable:!0,configurable:!0,get:()=>ie(n)};e&&(r.set=e=>{n.value=e},o.set(t,{get:()=>ie(n),set:e=>{n.value=e}})),Object.defineProperty(a,t,r);return}l(t,{get:()=>e[t],set:n=>{e[t]=n}})})}else{let e=n,t=e.state?e.state():{};c=r(t),Object.keys(t).forEach(u),Object.keys(e.getters||{}).forEach(t=>{let n=e.getters?.[t];if(!n)return;let r=i(()=>n.call(a,f));Object.defineProperty(a,t,{enumerable:!0,configurable:!0,get:()=>ie(r)})}),Object.keys(e.actions||{}).forEach(t=>{let n=e.actions?.[t];n&&Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:(...e)=>n.apply(a,e)})})}let p=I(f);return Object.defineProperty(a,"$id",{enumerable:!0,configurable:!0,get:()=>t}),Object.defineProperty(a,"$state",{enumerable:!0,configurable:!0,get:()=>f,set:e=>{ne(e)&&L(f,e)}}),Object.defineProperty(a,"$patch",{enumerable:!1,configurable:!0,value:e=>{if(typeof e==`function`){e(f);return}ne(e)&&L(f,e)}}),Object.defineProperty(a,"$set",{enumerable:!1,configurable:!0,value:(e,t)=>{fe(f,B(e),t)}}),Object.defineProperty(a,"$reset",{enumerable:!1,configurable:!0,value:()=>{if(c){z(c,I(p)),Array.from(o.keys()).forEach(e=>{e in p||(delete a[e],o.delete(e))}),Object.keys(p).forEach(u);return}L(f,I(p))}}),Object.defineProperty(a,"$subscribe",{enumerable:!1,configurable:!0,value:(e,n)=>{let r=!1,i=v(()=>{let i=I(f);(r||n?.immediate)&&e({storeId:t},i),r=!0});return s.add(i),()=>{s.delete(i),i.dispose()}}}),Object.defineProperty(a,"$dispose",{enumerable:!1,configurable:!0,value:()=>{Array.from(s).forEach(e=>{e.dispose(),s.delete(e)}),e._s.delete(t)}}),e._p.forEach(n=>{q(e,a,t,n)}),a};function ge(e,t){let n=n=>{let r=n||J(),i=r._s.get(e);if(i)return i;let a=he(r,e,t);return r._s.set(e,a),a};return Object.defineProperty(n,"$id",{enumerable:!1,configurable:!0,value:e}),n}var Y=3,_e=6,ve=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ye=[{id:`all`,label:`全部`,hint:`默认值不会写入 URL。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],be=0,xe=ge(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),X=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},Z=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},Se=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,Ce=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,Z(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,Z(t[2]??null))};let i=()=>{e(`popstate`,Z())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},we=()=>{let e=me();e.use(K({stores:{"store-query-sync-demo":{q:{path:`search`,parser:M.withDefault(``),limitUrlUpdates:j(500)},tab:{parser:M.withDefault(`all`),history:`push`,limitUrlUpdates:ae(180)},page:{parser:N.withDefault(1),history:`push`,limitUrlUpdates:ae(180)}}}}));let t=xe(e),n=w(`computed:1:0`,()=>i(()=>{let e=t.normalizedSearch;return ve.filter(n=>t.tab===`all`||n.tab===t.tab?!e||`${n.title} ${n.teaser} ${n.badge}`.toLowerCase().includes(e):!1)})),r=w(`computed:1:1`,()=>i(()=>Math.max(1,Math.ceil(n.get().length/Y))));return{root:e,store:t,filteredItems:n,visibleItems:w(`computed:1:2`,()=>i(()=>{let e=(Math.min(Math.max(1,t.page),r.get())-1)*Y;return n.get().slice(e,e+Y)})),totalPages:r,clampEffect:w(`watchEffect:1:3`,()=>v(()=>{let e=r.get();if(t.page<1){t.page=1;return}t.page>e&&(t.page=e)}))}},Te=E({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
`,Demo:()=>{let{route:r,demo:c,historyRecords:u,historyRecorderCleanup:E,appendHistoryRecord:D,currentPath:O,currentPage:k,expectedQuery:ne,resetStoreQuery:re,clearAllUrlParams:ie}=w(`useSetup:0:0`,()=>e(()=>{let e=te(),t=we(),n=w(`ref:1:4`,()=>h([])),r=w(`ref:1:5`,()=>h(null)),a=(e,t)=>{be+=1,n.value=[{id:be,kind:e,href:t},...n.value].slice(0,_e)};C(()=>{r.value=Ce(a)}),b(()=>{r.value?.(),t.clampEffect.dispose(),t.root.dispose()});let o=e.get()?.path||`/examples/store-query-sync`,s=w(`computed:1:6`,()=>i(()=>Math.min(Math.max(1,t.store.page),t.totalPages.get()))),c=w(`computed:1:7`,()=>i(()=>X(t.store))),l=()=>{t.store.search=``,t.store.tab=`all`,t.store.page=1};return{route:e,demo:t,historyRecords:n,historyRecorderCleanup:r,appendHistoryRecord:a,currentPath:o,currentPage:s,expectedQuery:c,resetStoreQuery:l,clearAllUrlParams:()=>{if(l(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}}));return x(e=>{let r=g(`div`,e);o(r,`grid gap-6`);let i=g(`div`,r);_(r,i),o(i,`card bg-base-100 shadow`);let h=g(`div`,i);_(i,h),o(h,`card-body gap-4`);let b=g(`div`,h);_(h,b),o(b,`flex flex-wrap items-start justify-between gap-3`);let C=g(`div`,b);_(b,C),o(C,`space-y-2`);let w=g(`h2`,C);_(C,w),o(w,`text-2xl font-semibold`),_(w,p(`Store、Router、Query Sync 串联演示`));let te=g(`p`,C);_(C,te),o(te,`max-w-3xl text-sm leading-6 text-base-content/75`),_(te,p(`搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。`));let E=g(`div`,b);_(b,E),o(E,`flex flex-wrap gap-2 text-xs`);let D=g(`span`,E);_(E,D),o(D,`rounded-full bg-base-200 px-3 py-1 font-medium`),_(D,p(`当前路由：`));let A=s(`rue:slot:anchor`);_(D,A),v(()=>{let e=O;y(()=>S(e,D,A))});let j=g(`span`,E);_(E,j),o(j,`rounded-full bg-base-200 px-3 py-1 font-medium`),_(j,p(`预期 Query：`));let ae=s(`rue:slot:anchor`);_(j,ae),v(()=>{let e=ne.get();y(()=>S(e,j,ae))});let M=g(`div`,h);_(h,M),o(M,`flex flex-wrap gap-2`);let N=g(`a`,M);_(M,N),v(()=>{t(N,`href`,String(T.__rueHref(`${O}?q=router&tab=router&page=1`)))}),m(N,`click`,e=>T.__rueOnClick(e,`${O}?q=router&tab=router&page=1`,!1)),m(N,`pointerenter`,e=>T.__rueOnPrefetch(e,`${O}?q=router&tab=router&page=1`,`hover`)),m(N,`focus`,e=>T.__rueOnPrefetch(e,`${O}?q=router&tab=router&page=1`,`hover`)),m(N,`pointerdown`,e=>T.__rueOnPrefetch(e,`${O}?q=router&tab=router&page=1`,`hover`)),m(N,`touchstart`,e=>T.__rueOnPrefetch(e,`${O}?q=router&tab=router&page=1`,`hover`)),o(N,`btn btn-sm btn-outline`),_(N,p(`Router 预设`));let P=g(`a`,M);_(M,P),v(()=>{t(P,`href`,String(T.__rueHref(`${O}?q=sync&tab=store&page=1`)))}),m(P,`click`,e=>T.__rueOnClick(e,`${O}?q=sync&tab=store&page=1`,!1)),m(P,`pointerenter`,e=>T.__rueOnPrefetch(e,`${O}?q=sync&tab=store&page=1`,`hover`)),m(P,`focus`,e=>T.__rueOnPrefetch(e,`${O}?q=sync&tab=store&page=1`,`hover`)),m(P,`pointerdown`,e=>T.__rueOnPrefetch(e,`${O}?q=sync&tab=store&page=1`,`hover`)),m(P,`touchstart`,e=>T.__rueOnPrefetch(e,`${O}?q=sync&tab=store&page=1`,`hover`)),o(P,`btn btn-sm btn-outline`),_(P,p(`Store 预设`));let F=g(`a`,M);_(M,F),v(()=>{t(F,`href`,String(T.__rueHref(`${O}?q=render&tab=runtime&page=1`)))}),m(F,`click`,e=>T.__rueOnClick(e,`${O}?q=render&tab=runtime&page=1`,!1)),m(F,`pointerenter`,e=>T.__rueOnPrefetch(e,`${O}?q=render&tab=runtime&page=1`,`hover`)),m(F,`focus`,e=>T.__rueOnPrefetch(e,`${O}?q=render&tab=runtime&page=1`,`hover`)),m(F,`pointerdown`,e=>T.__rueOnPrefetch(e,`${O}?q=render&tab=runtime&page=1`,`hover`)),m(F,`touchstart`,e=>T.__rueOnPrefetch(e,`${O}?q=render&tab=runtime&page=1`,`hover`)),o(F,`btn btn-sm btn-outline`),_(F,p(`Runtime 预设`));let I=g(`button`,M);_(M,I),o(I,`btn btn-sm btn-ghost`),m(I,`click`,re),_(I,p(`清空 Query`));let L=g(`button`,M);_(M,L),o(L,`btn btn-sm btn-ghost`),m(L,`click`,ie),_(L,p(`清理所有 URL 参数`));let R=g(`div`,r);_(r,R),o(R,`grid gap-6`);let oe=g(`div`,R);_(R,oe),o(oe,`card bg-base-100 shadow`);let z=g(`div`,oe);_(oe,z),o(z,`card-body gap-4`);let B=g(`label`,z);_(z,B),o(B,`form-control gap-2`);let se=g(`span`,B);_(B,se),o(se,`label-text font-medium`),_(se,p(`搜索（debounce 500ms）`));let V=g(`input`,B);_(B,V),o(V,`input input-bordered`),v(()=>{f(V,c.store.search)}),m(V,`input`,e=>{c.store.search=e.target.value,c.store.page=1}),t(V,`placeholder`,`例如：router / sync / render`);let H=g(`div`,z);_(z,H),o(H,`grid gap-2`);let U=g(`span`,H);_(H,U),o(U,`label-text font-medium`),_(U,p(`分类（throttle 180ms + push）`));let W=g(`div`,H);_(H,W),o(W,`flex flex-wrap gap-2`);let ce=s(`rue:list:start`),le=s(`rue:list:end`);_(W,ce),_(W,le);let G=new Map;v(()=>{G=ee({items:ye||[],getKey:(e,t)=>e.id,elements:G,parent:W,before:le,singleRoot:!0,trackIndex:!1,start:ce,renderItem:(e,n,r,i,a)=>{S(x(()=>{let n=l(),r=g(`button`,n);_(n,r),v(()=>{t(r,`key`,String(e.id))}),v(()=>{o(r,`btn btn-sm ${c.store.tab===e.id?`btn-primary`:`btn-outline`}`)}),m(r,`click`,()=>{c.store.tab=e.id,c.store.page=1});let i=s(`rue:slot:anchor`);return _(r,i),v(()=>{let t=e.label;y(()=>S(t,r,i))}),n}),n,r)}})});let ue=g(`p`,H);_(H,ue),o(ue,`text-xs leading-5 text-base-content/60`);let de=d(ue);_(ue,de),v(()=>{a(de,ye.find(e=>e.id===c.store.tab)?.hint)});let K=g(`div`,z);_(z,K),o(K,`grid gap-2`);let fe=g(`span`,K);_(K,fe),o(fe,`label-text font-medium`),_(fe,p(`分页（throttle 180ms + push）`));let q=g(`div`,K);_(K,q),o(q,`flex items-center gap-2`);let pe=g(`button`,q);_(q,pe),o(pe,`btn btn-sm btn-outline`),v(()=>{n(pe,k.get()<=1)}),m(pe,`click`,()=>{c.store.page=Math.max(1,k.get()-1)}),_(pe,p(`上一页`));let J=g(`span`,q);_(q,J),o(J,`min-w-24 text-center text-sm font-medium`),_(J,p(`第 `));let me=s(`rue:slot:anchor`);_(J,me),v(()=>{let e=k.get();y(()=>S(e,J,me))}),_(J,p(` / `));let he=s(`rue:slot:anchor`);_(J,he),v(()=>{let e=c.totalPages.get();y(()=>S(e,J,he))}),_(J,p(` 页`));let ge=g(`button`,q);_(q,ge),o(ge,`btn btn-sm btn-outline`),v(()=>{n(ge,k.get()>=c.totalPages.get())}),m(ge,`click`,()=>{c.store.page=Math.min(c.totalPages.get(),k.get()+1)}),_(ge,p(`下一页`));let Y=g(`div`,z);_(z,Y),o(Y,`rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70`);let _e=g(`p`,Y);_(Y,_e),_(_e,p(`本地状态会立刻刷新卡片列表。`));let ve=g(`p`,Y);_(Y,ve),_(ve,p(`地址栏会按 debounce 或 throttle 的规则延后追上。`));let be=g(`p`,Y);_(Y,be),_(be,p(`上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。`));let xe=g(`p`,Y);_(Y,xe),_(xe,p(`下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。`));let X=g(`div`,z);_(z,X),o(X,`grid gap-2`);let Z=g(`div`,X);_(X,Z),o(Z,`flex flex-wrap items-center justify-between gap-2`);let Ce=g(`span`,Z);_(Z,Ce),o(Ce,`label-text font-medium`),_(Ce,p(`URL 写入记录`));let we=g(`span`,Z);_(Z,we),o(we,`text-xs text-base-content/60`),_(we,p(`分类 / 分页走 pushState，搜索走 replaceState。`));let Te=s(`rue:slot:anchor`);_(X,Te),v(()=>{let e=u.value.length?x(()=>{let e=l(),n=g(`ul`,e);_(e,n),o(n,`rounded-2xl border border-base-200 bg-base-100`);let r=s(`rue:list:start`),i=s(`rue:list:end`);_(n,r),_(n,i);let a=new Map;return v(()=>{a=ee({items:u.value||[],getKey:(e,t)=>e.id,elements:a,parent:n,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(e,n,r,i,a)=>{S(x(()=>{let n=l(),r=g(`li`,n);_(n,r),v(()=>{t(r,`key`,String(e.id))}),o(r,`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`);let i=g(`span`,r);_(r,i),v(()=>{o(i,`badge badge-sm ${e.kind===`push`?`badge-primary`:e.kind===`replace`?`badge-ghost`:`badge-outline`}`)});let a=s(`rue:slot:anchor`);_(i,a),v(()=>{let t=Se(e.kind);y(()=>S(t,i,a))});let c=g(`span`,r);_(r,c),o(c,`font-mono text-xs text-base-content/70`);let u=s(`rue:slot:anchor`);return _(c,u),v(()=>{let t=e.href;y(()=>S(t,c,u))}),n}),n,r)}})}),e}):x(()=>{let e=l(),t=g(`div`,e);return _(e,t),o(t,`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`),_(t,p(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),e});y(()=>S(e,X,Te))});let Ee=g(`div`,R);_(R,Ee),o(Ee,`card bg-base-100 shadow`);let De=g(`div`,Ee);_(Ee,De),o(De,`card-body gap-4`);let Oe=g(`div`,De);_(De,Oe),o(Oe,`flex flex-col gap-3`);let ke=g(`div`,Oe);_(Oe,ke);let Ae=g(`h3`,ke);_(ke,Ae),o(Ae,`text-xl font-semibold`),_(Ae,p(`筛选结果`));let Q=g(`p`,ke);_(ke,Q),o(Q,`text-sm text-base-content/70`),_(Q,p(`共 `));let je=s(`rue:slot:anchor`);_(Q,je),v(()=>{let e=c.filteredItems.get().length;y(()=>S(e,Q,je))}),_(Q,p(` 条，当前展示 `));let Me=s(`rue:slot:anchor`);_(Q,Me),v(()=>{let e=c.visibleItems.get().length;y(()=>S(e,Q,Me))});let Ne=d(Q);_(Q,Ne),a(Ne,` `),_(Q,p(`条。`));let $=g(`div`,Oe);_(Oe,$),o($,`flex flex-wrap gap-2 text-xs`);let Pe=g(`span`,$);_($,Pe),o(Pe,`rounded-full bg-base-200 px-3 py-1`),_(Pe,p(`search=`));let Fe=s(`rue:slot:anchor`);_(Pe,Fe),v(()=>{let e=c.store.search||`(空)`;y(()=>S(e,Pe,Fe))});let Ie=g(`span`,$);_($,Ie),o(Ie,`rounded-full bg-base-200 px-3 py-1`),_(Ie,p(`tab=`));let Le=s(`rue:slot:anchor`);_(Ie,Le),v(()=>{let e=c.store.tab;y(()=>S(e,Ie,Le))});let Re=g(`span`,$);_($,Re),o(Re,`rounded-full bg-base-200 px-3 py-1`),_(Re,p(`page=`));let ze=s(`rue:slot:anchor`);_(Re,ze),v(()=>{let e=k.get();y(()=>S(e,Re,ze))});let Be=s(`rue:slot:anchor`);return _(De,Be),v(()=>{let e=c.visibleItems.get().length?x(()=>{let e=l(),n=g(`div`,e);_(e,n),o(n,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let r=s(`rue:list:start`),i=s(`rue:list:end`);_(n,r),_(n,i);let a=new Map;return v(()=>{a=ee({items:c.visibleItems.get()||[],getKey:(e,t)=>e.id,elements:a,parent:n,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(e,n,r,i,a)=>{S(x(()=>{let n=l(),r=g(`article`,n);_(n,r),v(()=>{t(r,`key`,String(e.id))}),o(r,`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`);let i=g(`div`,r);_(r,i),o(i,`mb-3 flex items-center justify-between gap-3`);let a=g(`span`,i);_(i,a),o(a,`badge badge-outline`);let c=s(`rue:slot:anchor`);_(a,c),v(()=>{let t=e.badge;y(()=>S(t,a,c))});let u=g(`span`,i);_(i,u),o(u,`text-xs text-base-content/50`);let d=s(`rue:slot:anchor`);_(u,d),v(()=>{let t=e.id;y(()=>S(t,u,d))});let f=g(`h4`,r);_(r,f),o(f,`text-base font-semibold leading-6`);let p=s(`rue:slot:anchor`);_(f,p),v(()=>{let t=e.title;y(()=>S(t,f,p))});let m=g(`p`,r);_(r,m),o(m,`mt-2 text-sm leading-6 text-base-content/70`);let h=s(`rue:slot:anchor`);return _(m,h),v(()=>{let t=e.teaser;y(()=>S(t,m,h))}),n}),n,r)}})}),e}):x(()=>{let e=l(),t=g(`div`,e);return _(e,t),o(t,`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`),_(t,p(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),e});y(()=>S(e,De,Be))}),r})},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Te as default};