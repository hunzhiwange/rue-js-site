import{An as e,Bt as t,C as n,Dn as r,Et as i,It as a,L as o,Lt as s,Mt as c,Rt as l,S as u,Sn as d,V as f,W as p,X as m,Y as h,_n as g,bn as _,ct as ee,fn as v,ft as te,gn as y,hn as b,ht as x,it as S,kn as C,nt as ne,ot as w,pn as T,q as E,qt as D,rt as O,wn as k,x as A,z as j}from"./rue-runtime-CwEGJ854.js";import{n as M,s as re}from"./rue-router-qSDiu7Tb.js";import{t as N}from"./createHomeSplitExamplePage-DuLZTUZH.js";import{a as P,i as F,n as I,o as L,r as R,s as z,t as B}from"./rue-store-DVwrGRZl.js";var ie=g(`<div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-start justify-between gap-3"><div class="space-y-2"><h2 class="text-2xl font-semibold">Store、Router、Query Sync 串联演示</h2><p class="max-w-3xl text-sm leading-6 text-base-content/75">搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。</p></div><div class="flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-base-200 px-3 py-1 font-medium">当前路由：<!--rue:text-hole:0--></span><span class="rounded-full bg-base-200 px-3 py-1 font-medium">预期 Query：<!--rue:text-hole:1--></span></div></div><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><button class="btn btn-sm btn-ghost">清空 Query</button><button class="btn btn-sm btn-ghost">清理所有 URL 参数</button></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><label class="form-control gap-2"><span class="label-text font-medium">搜索（debounce 500ms）</span><input class="input input-bordered" placeholder="例如：router / sync / render"></label><div class="grid gap-2"><span class="label-text font-medium">分类（throttle 180ms + push）</span><div class="flex flex-wrap gap-2"><!--rue:text-hole:5--></div><p class="text-xs leading-5 text-base-content/60"><!--rue:text-hole:6--></p></div><div class="grid gap-2"><span class="label-text font-medium">分页（throttle 180ms + push）</span><div class="flex items-center gap-2"><button class="btn btn-sm btn-outline">上一页</button><span class="min-w-24 text-center text-sm font-medium">第 <!--rue:text-hole:7--> / <!--rue:text-hole:8--> 页</span><button class="btn btn-sm btn-outline">下一页</button></div></div><div class="rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70"><p>本地状态会立刻刷新卡片列表。</p><p>地址栏会按 debounce 或 throttle 的规则延后追上。</p><p>上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。</p><p>下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。</p></div><div class="grid gap-2"><div class="flex flex-wrap items-center justify-between gap-2"><span class="label-text font-medium">URL 写入记录</span><span class="text-xs text-base-content/60">分类 / 分页走 pushState，搜索走 replaceState。</span></div><!--rue:text-hole:9--></div></div></div><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-col gap-3"><div><h3 class="text-xl font-semibold">筛选结果</h3><p class="text-sm text-base-content/70">共 <!--rue:text-hole:10--> 条，当前展示 <!--rue:text-hole:11--> 条。</p></div><div class="flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-base-200 px-3 py-1">search=<!--rue:text-hole:12--></span><span class="rounded-full bg-base-200 px-3 py-1">tab=<!--rue:text-hole:13--></span><span class="rounded-full bg-base-200 px-3 py-1">page=<!--rue:text-hole:14--></span></div></div><!--rue:text-hole:15--></div></div></div></div>`),V=3,H=6,U=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ae=[{id:`all`,label:`全部`,hint:`默认值不会写入 URL。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],W=0,G=F(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),K=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},q=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},oe=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,J=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,q(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,q(t[2]??null))};let i=()=>{e(`popstate`,q())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},se=()=>{let t=I();t.use(B({stores:{"store-query-sync-demo":{q:{path:`search`,parser:L.withDefault(``),limitUrlUpdates:R(500)},tab:{parser:L.withDefault(`all`),history:`push`,limitUrlUpdates:z(180)},page:{parser:P.withDefault(1),history:`push`,limitUrlUpdates:z(180)}}}}));let n=G(t),r=D(`computed:1:0`,()=>d(()=>{let e=n.normalizedSearch;return U.filter(t=>n.tab!==`all`&&t.tab!==n.tab?!1:!e||`${t.title} ${t.teaser} ${t.badge}`.toLowerCase().includes(e))})),i=D(`computed:1:1`,()=>d(()=>Math.max(1,Math.ceil(r.get().length/V))));return{root:t,store:n,filteredItems:r,visibleItems:D(`computed:1:2`,()=>d(()=>{let e=(Math.min(Math.max(1,n.page),i.get())-1)*V;return r.get().slice(e,e+V)})),totalPages:i,clampEffect:D(`watchEffect:1:3`,()=>e(()=>{let e=i.get();if(n.page<1){n.page=1;return}n.page>e&&(n.page=e)}))}},Y=N({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
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
`,Demo:()=>{let e=re(),g=se(),D=t([]),N=t(null),P=(e,t)=>{W+=1,D.value=[{id:W,kind:e,href:t},...D.value].slice(0,H)};a(()=>{N.value=J(P)}),l(()=>{N.value?.(),g.clampEffect.dispose(),g.root.dispose()});let F=e.get()?.path||`/examples/store-query-sync`,I=d(()=>Math.min(Math.max(1,g.store.page),g.totalPages.get())),L=d(()=>K(g.store)),R=()=>{g.store.search=``,g.store.tab=`all`,g.store.page=1},z=()=>{if(R(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)};return c(()=>E(x(()=>{let e=ne(),t=ie().content.cloneNode(!0),a=t.firstChild,c=a.childNodes[0].childNodes[0].childNodes[1].childNodes[3],l=a.childNodes[0].childNodes[0].childNodes[1].childNodes[4],d=a.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1],x=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],E=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[2],j=a.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],re=j.parentNode,N=a.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],P=N.parentNode,B=a.childNodes[0].childNodes[0].childNodes[1].childNodes[0],V=B.parentNode,H=a.childNodes[0].childNodes[0].childNodes[1].childNodes[1],U=H.parentNode,W=a.childNodes[0].childNodes[0].childNodes[1].childNodes[2],G=W.parentNode,K=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],q=K.parentNode,J=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0],se=J.parentNode,Y=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[1],ce=Y.parentNode,le=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[3],ue=le.parentNode,de=a.childNodes[1].childNodes[0].childNodes[0].childNodes[4].childNodes[1],fe=de.parentNode,pe=a.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1],me=pe.parentNode,he=a.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[3],ge=he.parentNode,_e=a.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],ve=_e.parentNode,ye=a.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],be=ye.parentNode,xe=a.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1],Se=xe.parentNode,Ce=a.childNodes[1].childNodes[1].childNodes[0].childNodes[1],we=Ce.parentNode;e.appendChild(t),o(c,`btn btn-sm btn-ghost`);let Te=e=>{let t=R;typeof t==`function`&&t(e)};c.addEventListener(`click`,Te),s(()=>c.removeEventListener(`click`,Te)),o(l,`btn btn-sm btn-ghost`);let Ee=e=>{let t=z;typeof t==`function`&&t(e)};l.addEventListener(`click`,Ee),s(()=>l.removeEventListener(`click`,Ee)),o(d,`input input-bordered`),k(()=>{te(d,g.store.search)});let De=e=>{let t=e=>{g.store.search=e.target.value,g.store.page=1};typeof t==`function`&&t(e)};d.addEventListener(`input`,De),s(()=>d.removeEventListener(`input`,De)),w(d,`placeholder`,`例如：router / sync / render`),o(x,`btn btn-sm btn-outline`),k(()=>{ee(x,I.get()<=1)});let Oe=e=>{let t=()=>{g.store.page=Math.max(1,I.get()-1)};typeof t==`function`&&t(e)};x.addEventListener(`click`,Oe),s(()=>x.removeEventListener(`click`,Oe)),o(E,`btn btn-sm btn-outline`),k(()=>{ee(E,I.get()>=g.totalPages.get())});let ke=e=>{let t=()=>{g.store.page=Math.min(g.totalPages.get(),I.get()+1)};typeof t==`function`&&t(e)};E.addEventListener(`click`,ke),s(()=>E.removeEventListener(`click`,ke)),k(()=>{let e=F;C(()=>h(e,re,j))}),k(()=>{let e=L.get();C(()=>h(e,P,N))});let X=O(`a`,V);m(V,X),V.insertBefore(X,B),k(()=>{w(X,`href`,String(M.__rueHref(`${F}?q=router&tab=router&page=1`)))});let Ae=e=>{let t=e=>M.__rueOnClick(e,`${F}?q=router&tab=router&page=1`,!1);typeof t==`function`&&t(e)};X.addEventListener(`click`,Ae),s(()=>X.removeEventListener(`click`,Ae));let je=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};X.addEventListener(`pointerenter`,je),s(()=>X.removeEventListener(`pointerenter`,je));let Me=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};X.addEventListener(`focus`,Me),s(()=>X.removeEventListener(`focus`,Me));let Ne=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};X.addEventListener(`pointerdown`,Ne),s(()=>X.removeEventListener(`pointerdown`,Ne));let Pe=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};X.addEventListener(`touchstart`,Pe),s(()=>X.removeEventListener(`touchstart`,Pe)),o(X,`btn btn-sm btn-outline`),m(X,S(`Router 预设`));let Z=O(`a`,U);m(U,Z),U.insertBefore(Z,H),k(()=>{w(Z,`href`,String(M.__rueHref(`${F}?q=sync&tab=store&page=1`)))});let Fe=e=>{let t=e=>M.__rueOnClick(e,`${F}?q=sync&tab=store&page=1`,!1);typeof t==`function`&&t(e)};Z.addEventListener(`click`,Fe),s(()=>Z.removeEventListener(`click`,Fe));let Q=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`pointerenter`,Q),s(()=>Z.removeEventListener(`pointerenter`,Q));let Ie=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`focus`,Ie),s(()=>Z.removeEventListener(`focus`,Ie));let Le=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`pointerdown`,Le),s(()=>Z.removeEventListener(`pointerdown`,Le));let Re=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`touchstart`,Re),s(()=>Z.removeEventListener(`touchstart`,Re)),o(Z,`btn btn-sm btn-outline`),m(Z,S(`Store 预设`));let $=O(`a`,G);m(G,$),G.insertBefore($,W),k(()=>{w($,`href`,String(M.__rueHref(`${F}?q=render&tab=runtime&page=1`)))});let ze=e=>{let t=e=>M.__rueOnClick(e,`${F}?q=render&tab=runtime&page=1`,!1);typeof t==`function`&&t(e)};$.addEventListener(`click`,ze),s(()=>$.removeEventListener(`click`,ze));let Be=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`pointerenter`,Be),s(()=>$.removeEventListener(`pointerenter`,Be));let Ve=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`focus`,Ve),s(()=>$.removeEventListener(`focus`,Ve));let He=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`pointerdown`,He),s(()=>$.removeEventListener(`pointerdown`,He));let Ue=e=>{let t=e=>M.__rueOnPrefetch(e,`${F}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`touchstart`,Ue),s(()=>$.removeEventListener(`touchstart`,Ue)),o($,`btn btn-sm btn-outline`),m($,S(`Runtime 预设`));let We=[];return k(()=>{We=n(q,K,We,ae||[],(e,t)=>e.id,(e,t)=>{let n=p(e),a=p(t);return u((e,t,a)=>A(e,a,()=>i(Object.assign(e=>{let t=b(`button`,e),i;k(()=>{let e=`btn btn-sm ${g.store.tab===n.get().id?`btn-primary`:`btn-outline`}`,r=e==null?``:String(e);Object.is(i,r)||(i=r,t.className=r)});let a=e=>{let t=()=>{g.store.tab=n.get().id,g.store.page=1};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),r(()=>t.removeEventListener(`click`,a));let o=y(``);return v(t,o),_(o,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})}),k(()=>{let e=ae.find(e=>e.id===g.store.tab)?.hint;C(()=>h(e,se,J))}),k(()=>{let e=I.get();C(()=>h(e,ce,Y))}),k(()=>{let e=g.totalPages.get();C(()=>h(e,ue,le))}),f(fe,de,()=>D.value.length?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=b(`ul`,e);t.className=`rounded-2xl border border-base-200 bg-base-100`;let r=T(`rue:list:end`);v(t,r);let a=[];return k(()=>{let e=D.value||[];a=n(r.parentNode,r,a,e,(e,t)=>e.id,(e,t)=>{let n=p(e),r=p(t);return u((e,t,r)=>A(e,r,()=>i(Object.assign(e=>{let t=b(`li`,e);t.className=`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`;let r=b(`span`,t);v(t,r);let i;k(()=>{let e=`badge badge-sm ${n.get().kind===`push`?`badge-primary`:n.get().kind===`replace`?`badge-ghost`:`badge-outline`}`,t=e==null?``:String(e);Object.is(i,t)||(i=t,r.className=t)});let a=T(`rue:compiled-slot`);v(r,a),k(()=>{let e=oe(n.get().kind);C(()=>h(e,r,a))});let o=b(`span`,t);v(t,o),o.className=`font-mono text-xs text-base-content/70`;let s=y(``);return v(o,s),_(s,()=>n.get().href),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=b(`div`,e);return t.className=`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`,v(t,y(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),k(()=>{let e=g.filteredItems.get().length;C(()=>h(e,me,pe))}),k(()=>{let e=g.visibleItems.get().length;C(()=>h(e,ge,he))}),f(ve,_e,()=>{let e=g.store.search;return e?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=y(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=y(`(空)`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),k(()=>{let e=g.store.tab;C(()=>h(e,be,ye))}),k(()=>{let e=I.get();C(()=>h(e,Se,xe))}),f(we,Ce,()=>g.visibleItems.get().length?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=b(`div`,e);t.className=`grid gap-3 md:grid-cols-2 xl:grid-cols-3`;let r=T(`rue:list:end`);v(t,r);let a=[];return k(()=>{let e=g.visibleItems.get()||[];a=n(r.parentNode,r,a,e,(e,t)=>e.id,(e,t)=>{let n=p(e),r=p(t);return u((e,t,r)=>A(e,r,()=>i(Object.assign(e=>{let t=b(`article`,e);t.className=`rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4`;let r=b(`div`,t);v(t,r),r.className=`mb-3 flex items-center justify-between gap-3`;let i=b(`span`,r);v(r,i),i.className=`badge badge-outline`;let a=y(``);v(i,a),_(a,()=>n.get().badge);let o=b(`span`,r);v(r,o),o.className=`text-xs text-base-content/50`;let s=y(``);v(o,s),_(s,()=>n.get().id);let c=b(`h4`,t);v(t,c),c.className=`text-base font-semibold leading-6`;let l=y(``);v(c,l),_(l,()=>n.get().title);let u=b(`p`,t);v(t,u),u.className=`mt-2 text-sm leading-6 text-base-content/70`;let d=y(``);return v(u,d),_(d,()=>n.get().teaser),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=b(`div`,e);return t.className=`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`,v(t,y(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0),e=>j(()=>{})))},codeCardClassName:`h-[520px] md:h-[1220px]`});export{Y as default};